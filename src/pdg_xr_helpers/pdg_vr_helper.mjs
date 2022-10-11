export const VR = 'immersive-vr';

const default_init_options = {
	optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ]
}

export function create_vr_session( 
    on_session_created, 
    on_session_error,
) {
    if (! ('xr' in navigator) ) {
        console.error( 'xr not supported' );
        alert( 'xr not supported' );
        if ( on_session_error ) on_session_error( 'xr not supported' );
        return;
    }

    navigator.xr.isSessionSupported(VR)
    .then( ( supported ) => {
        if ( !supported ) {
            console.error( 'vr not supported' );
            alert( 'vr not supported' );
            if ( on_session_error ) on_session_error( 'vr not supported' );
        }
        else {
            navigator.xr.requestSession( VR, default_init_options )
            .then( ( session ) => {
                if ( on_session_created ) on_session_created( session );
            })
            .catch( ( error ) => {
                console.error(error);
                if ( on_session_error ) on_session_error( 'request vr session failed', error );
            });
        }
    })
}
