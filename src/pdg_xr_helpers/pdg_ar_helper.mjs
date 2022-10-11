export const AR = 'immersive-ar';
const ar_test_requested = 'pdg__ar_requested_hit_test';
const ar_hit_test_source = 'pdg__ar_hit_test_source';

export function create_ar_session(
    on_session_created,
    on_session_error,
) {
    if (! ('xr' in navigator)) {
        console.error( 'xr not supported' );
        alert( 'xr not supported' );
        if (on_session_error) on_session_error( 'xr not supported' );
        return;
    }

    navigator.xr.isSessionSupported(AR)
    .then( ( supported ) => {
        if ( !supported ) {
            console.error( 'ar not supported' );
            alert( 'ar not supported' );
            if ( on_session_error ) on_session_error( 'ar not supported' );
        }
        else {
            const overlay = document.createElement( 'div' );
            overlay.style.display = 'none';
            document.body.appendChild( overlay );

            const initOptions = {
                requiredFeatures: [ 'local-floor' ],
                optionalFeatures: [ 'dom-overlay' ],
                domOverlay: { root: overlay }
            }

            navigator.xr.requestSession( AR, initOptions )
            .then( (session) => {
                session[ar_test_requested] = false;
                session[ar_hit_test_source] = null;
                overlay.style.display = '';
                session.addEventListener( 'end', () => {
                    document.body.removeChild( overlay );
                });
                if ( on_session_created ) on_session_created( session );
            })
            .catch( (error) => {
                console.error( error );
                if ( on_session_error ) on_session_error( 'request ar session failed', error );
            })
        }
    });
}

export function begin_hit_test( session ) {
    if (!( ar_test_requested in session ) || (session[ar_test_requested] === false)) {
        session.requestReferenceSpace( 'viewer' )
        .then( referenceSpace => {
            session.requestHitTestSource({
                space: referenceSpace
            }).then( source => {
                session[ar_hit_test_source] = source;
            })
        });

        session.addEventListener( 'end', function() {
            session[ar_test_requested] = false;
            session[ar_hit_test_source] = null;
        });
        session[ar_test_requested] = true;
    }
}

export function hit_test_source( session ) {
    return session[ar_hit_test_source] ?? null;
}

export function click_controller( renderer, on_click ) {
    let controller = renderer.xr.getController( 0 );
    controller.addEventListener( 'select', on_click );
    return controller;
}