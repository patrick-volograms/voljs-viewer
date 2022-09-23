import * as THREE from 'three';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry';

const VR = 'immersive-vr';

const default_init_options = {
	optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ]
}

var on_init;
var on_deinit;

function init_vr( session, camera, renderer ) {
    camera = new THREE.PerspectiveCamera( 
        50, window.innerWidth / window.innerHeight, 0.1, 10 );
    camera.position.set( 0, 1.6, 3 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.xr.enabled = true;

    renderer.xr.setSession( session );
    session.addEventListener( 'end', deinit_vr );

    document.addEventListener( 'mousedown', vr_touch_handler );
    document.addEventListener( 'mouseup', vr_touch_handler );

    if ( on_init ) on_init();
}

function deinit_vr() {
    vr_touch_end( null );
    current_mode = NOR;
    document.removeEventListener( 'mousedown', vr_touch_handler );
    document.removeEventListener( 'mouseup', vr_touch_handler );

    canvas_container = document.getElementById( 'canvas-container' );
    camera = new THREE.PerspectiveCamera(
          50, 
          canvas_container.offsetWidth / canvas_container.offsetHeight,
          0.1, 1000
    );

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(canvas_container.offsetWidth, canvas_container.offsetHeight);

    non_r_controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set( 0, 1.6, 3 );
    camera.rotation.set( 0, 0, 0 );
    if ( on_deinit ) on_deinit();
}

export function create_vr_session( 
    camera, 
    renderer,
    on_session_created, 
    on_session_failed,
    on_session_init_finished,
    on_session_deinit
) {
    if (! ('xr' in navigator) ) {
        console.error( 'xr not supported' );
        alert( 'xr not supported' );
        if ( on_session_failed ) on_session_failed( 'xr not supported' );
        return;
    }

    navigator.xr.isSessionSupported(VR)
    .then( ( supported ) => {
        if ( !supported ) {
            console.error( 'vr not supported' );
            alert( 'vr not supported' );
            if ( on_session_failed ) on_session_failed( 'vr not supported' );
        }
        else {
            navigator.xr.requestSession( VR, default_init_options )
            .then( ( session ) => {
                on_init = on_session_init_finished;
                on_deinit = on_session_deinit;
                console.debug( 'vr ready' );
                console.debug( session );
                //current_mode = VR;
                //xr_session = session;
                init_vr( session, camera, renderer );
                on_session_created( session );
            })
            .catch( ( error ) => {
                console.error(error);
                if ( on_session_failed ) on_session_failed( 'request vr session failed' );
            });
        }
    })
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

export function create_test_room() {
    return new THREE.LineSegments(
        new BoxLineGeometry( 6, 6, 6, 10, 10, 10 ).translate( 0, 3, 0 ),
        new THREE.LineBasicMaterial( { color: 0x808080 } )
    );
}