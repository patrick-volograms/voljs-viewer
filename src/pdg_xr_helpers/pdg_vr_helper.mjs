export const VR = 'immersive-vr';

const default_init_options = {
	optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ]
}


function init_vr( ) {
    document.addEventListener( 'mousedown', vr_touch_handler );
    document.addEventListener( 'mouseup', vr_touch_handler );
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
                init_vr();
                if ( on_session_created ) on_session_created( session );
            })
            .catch( ( error ) => {
                console.error(error);
                if ( on_session_error ) on_session_error( 'request vr session failed', error );
            });
        }
    })
}

export function exit_vr() {
    vr_touch_end( null );
    document.removeEventListener( 'mousedown', vr_touch_handler );
    document.removeEventListener( 'mouseup', vr_touch_handler );
}

export function render_in_vr() {
    renderer.render(scene, camera);
    if ( vr_touch_down ) {
        var touch_length = Date.now() - vr_touch_start_time;
        console.debug( touch_length );
        if ( touch_length > 3000 ) {
            console.debug( 'closing session' );
            console.debug( renderer.xr );
            console.debug( renderer.xr.getSession() );
            renderer.xr.getSession()?.end();
        }
    }
}

function vr_touch_handler( event ) {
    console.debug( event );
    switch (event.type) {
        case "touchstart":  break;
        case "touchmove":   break;
        case "touchend":    break;
        case "mousedown":   vr_touch_start( event ); break;
        case "mousemove":   break;
        case "mouseup":     vr_touch_end( event ); break;
        default: return;
    }
}

var vr_touch_start_time = -1;
var vr_touch_down = false;

function vr_touch_start( event ) {
	console.debug( event );
	vr_touch_start_time = Date.now();
	vr_touch_down = true; 
}

function vr_touch_end( event ) {
	vr_touch_down = false;
}
