import { useEffect, useState } from 'react'
import './App.css'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LandscapeIcon from '@mui/icons-material/Landscape';
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonIcon from '@mui/icons-material/Person';
import StopCircleIcon from '@mui/icons-material/StopCircle';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import * as VolPlayer from './web_vol_lib/vol_player.mjs';
import { video } from './web_vol_lib/vol_av.mjs';
import { Float32BufferAttribute, Uint16BufferAttribute } from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry';

const NOR = 'none';
const AR = 'immersive-ar';
const VR = 'immersive-vr';

const vr_session_init_options = {
	optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ]
}

let page_buttons = [];

var current_mode = NOR;
var xr_session;

var volo_mesh = {};
var volo_geometry = {};
var volo_texture;
var scene_obj;

let stats;
let renderer;
let reticle;
let camera;
let controller;
let hitTestSource = null;
let hitTestSourceRequested = false;
var non_r_controls;

var max_points;
var positions;
var tex_coords;

var vr_controller_1;
var vr_controller_2;

var canvas_container;

function App() {
	const scene = new THREE.Scene();
	
	useEffect(() => {
		canvas_container = document.getElementById( 'canvas-container' );
    	camera = new THREE.PerspectiveCamera(
      		50, 
      		canvas_container.offsetWidth / canvas_container.offsetHeight,
      		0.1, 1000
    	);

    	const canvas = document.getElementById('threeCanvas');
    	renderer = new THREE.WebGLRenderer({
      		canvas, antialias: true, alpha: true,
    	});
    	renderer.setSize(canvas_container.offsetWidth, canvas_container.offsetHeight);
    	//canvas_container.appendChild(renderer.domElement);

		non_r_controls = new OrbitControls(camera, renderer.domElement);
		camera.position.set( 0, 1.6, 3 );
		camera.rotation.set( 0, 0, 0 );

		stats = Stats();
		canvas_container.appendChild(stats.dom);

		const animate = () => {
			renderer.setAnimationLoop( render );
		};

		controller = renderer.xr.getController( 0 );
		controller.addEventListener( 'select', onSelect );
		scene.add( controller );

		reticle = new THREE.Mesh(
			new THREE.RingGeometry( 0.15, 0.2, 32 ).rotateX( - Math.PI / 2 ), 
			new THREE.MeshBasicMaterial()
		);

		reticle.matrixAutoUpdate = false;
		reticle.visible = false;
		scene.add( reticle );

		let room = new THREE.LineSegments(
			new BoxLineGeometry( 6, 6, 6, 10, 10, 10 ).translate( 0, 3, 0 ),
			new THREE.LineBasicMaterial( { color: 0x808080 } )
		);
		scene.add( room );

		window.addEventListener( 'resize', onWindowResize );

		animate();
  	}, []);

	function onSelect() {
		if ( reticle.visible ) {
			if ( !scene.getObjectByName( volo_mesh.name ) )
			{
				start_vol_player();
			}
			reticle.matrix.decompose( volo_mesh.position );
		}
	}

	function onWindowResize() {
		//console.log(window.innerWidth, window.innerHeight);
		console.debug(canvas_container.offsetWidth, canvas_container.offsetHeight);
		camera.aspect = canvas_container.offsetWidth / canvas_container.offsetHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( canvas_container.offsetWidth, canvas_container.offsetHeight );
	}

	async function start_vol_player() {
		var v = await VolPlayer.init();
		console.debug(v);

		await VolPlayer.open(
			'/src/assets/calif/header.vols', 
			'/src/assets/calif/sequence_0.vols', 
			'/src/assets/calif/output.mp4');

		max_points = await VolPlayer.get_max_sz();
		console.debug(max_points);

		volo_texture = new THREE.VideoTexture(
			video
		);
		video.format = THREE.RGBFormat;

		volo_geometry = new THREE.BufferGeometry();
		volo_geometry.name = 'vologram_geom';
		positions = new Float32Array(max_points * 3);
		volo_geometry.setAttribute( 
			'position',
			new THREE.BufferAttribute(positions, 3)
		);
		tex_coords = new Float32Array(max_points * 2);
		volo_geometry.setAttribute( 
			'uv',
			new Float32BufferAttribute(tex_coords, 2)
		);
		var ind = new Uint16Array(max_points);
		volo_geometry.setIndex( new Uint16BufferAttribute(ind, 1) )

		const mat = new THREE.MeshBasicMaterial( { 
				color: 0xffffff, 
				map: volo_texture
			} );
		volo_mesh = new THREE.Mesh(volo_geometry, mat);
		volo_mesh.name = 'Vologram';
		volo_mesh.scale.x = 1;
		volo_mesh.scale.y = 1;
		volo_mesh.scale.z = 1;
		volo_mesh.position.z = -2;
		scene.add(volo_mesh);
		
		VolPlayer.set_frame_callback(function (frameNumber, key, vert, uvs, ind) {
			volo_geometry.index.array = ind.slice();
			volo_geometry.attributes.position.array = vert.slice();
			volo_geometry.attributes.uv.array = uvs.slice();

			volo_geometry.index.needsUpdate = true;
			volo_geometry.attributes.position.needsUpdate = true;
			volo_geometry.attributes.uv.needsUpdate = true;
		});
		VolPlayer.start();
	}

	function print_scene() {
		console.debug(renderer.xr.getSession());
		console.debug(camera);
	}

	function clear_console() {
		console.clear();
	}

	function stop_player() {
		volo_mesh.remove(volo_geometry);
		scene.remove(volo_mesh);
		VolPlayer.close();
	}

	function init_vr( session ) {
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

		start_vol_player();
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
	}

	function init_ar( session ) {
		camera = new THREE.PerspectiveCamera( 
			50, window.innerWidth / window.innerHeight, 0.1, 10 );
		camera.position.set( 0, 1.6, 3 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.xr.enabled = true;

		renderer.xr.setSession( session );

		start_vol_player();
	}

	function render( timestamp, frame ) {
		stats.update();

		switch (current_mode) {
			case VR:
			{
				render_in_vr();
				break;
			}
			case AR: 
			{
				render_in_ar( frame );
				break;
			}
			default:
				render_in_no_r();
		}
	}

	function render_in_no_r() {
		non_r_controls.update();
		renderer.render( scene, camera );
	}

	function render_in_ar( frame ) {
		if ( frame ) {
			const referenceSpace = renderer.xr.getReferenceSpace();
			const session = renderer.xr.getSession();
			if ( hitTestSourceRequested === false ) {
				session.requestReferenceSpace( 'viewer' ).then( 
					function ( referenceSpace ) {
					session.requestHitTestSource( { 
						space: referenceSpace 
					} ).then( function ( source ) {
						hitTestSource = source;
					} );
				} );
				session.addEventListener( 'end', function () {
					hitTestSourceRequested = false;
					hitTestSource = null;
				} );
				hitTestSourceRequested = true;
			}

			if ( hitTestSource ) {
				const hitTestResults = frame.getHitTestResults( hitTestSource );
				if ( hitTestResults.length ) {
					const hit = hitTestResults[ 0 ];
					reticle.visible = true;
					reticle.matrix.fromArray( hit.getPose( referenceSpace ).transform.matrix );
				} else {
					reticle.visible = false;
				}
			}
		}
		renderer.render( scene, camera );
	}

	function render_in_vr() {
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

	function start_ar() {
		if (! ('xr' in navigator)) {
			console.error('xr not supported');
			alert('xr not supported');
			return;
		}

		navigator.xr.isSessionSupported('immersive-ar')
		.then( (supported) => {
			if (!supported) {
				console.error('ar not supported');
				alert('ar not supported');
			}
			else {
				navigator.xr.requestSession(AR, vr_session_init_options)
				.then( (session) => {
					console.debug('ar ready');
					console.debug(session);
					current_mode = AR;
					xr_session = session;
					init_ar(session);
				})
				.catch( (error) => {
					console.error(error);
				});
			}
		})
	}

	function start_vr() {
		if (! ('xr' in navigator)) {
			console.error('xr not supported');
			alert('xr not supported');
			return;
		}

		navigator.xr.isSessionSupported(VR)
		.then( (supported) => {
			if (!supported) {
				console.error('vr not supported');
				alert('vr not supported');
			}
			else {
				navigator.xr.requestSession(VR, vr_session_init_options)
				.then( (session) => {
					console.debug('vr ready');
					console.debug(session);
					current_mode = VR;
					xr_session = session;
					init_vr(session);
				})
				.catch( (error) => {
					console.error(error);
				});
			}
		})
	}

	function vr_touch_handler( event ) {
		console.debug( event );
		switch (event.type) {
			case "touchstart": break;
			case "touchmove": break;
			case "touchend": break;
			case "mousedown": vr_touch_start( event ); break;
			case "mousemove": break;
			case "mouseup": vr_touch_end( event ); break;
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

	const speed_dial_actions = [
		{ icon: <ViewInArIcon/>, name:'AR', onclick: start_ar },
		{ icon: <ViewInArIcon/>, name:'VR', onclick: start_vr },
		{ icon: <TerminalIcon/>, name:'Clear Console', onclick: clear_console},
		{ icon: <LandscapeIcon/>, name:'Print Scene', onclick: print_scene},
		{ icon: <StopCircleIcon/>, name:'Stop Player', onclick: stop_player},
		{ icon: <PersonIcon/>, name:'Play Vologram', onclick: start_vol_player},
	]

  	return (
	<Container id='canvas-container'
		sx={{
			position: 'fixed',
			top: '0px',
			left: '0px',
			padding: 0,
			paddingLeft: 0,
			height: '100vh',
			minWidth: '100%',
			justify: 'solid'
		}}
	>
		<canvas id='threeCanvas'/>	
		<SpeedDial
			ariaLabel='Quick Actions'
			sx={{position: 'absolute', bottom: 16, right: 16}}
			icon={<AttractionsIcon/>}
		>
			{speed_dial_actions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipOpen
					tooltipTitle={action.name}
					onClick={action.onclick}
				/>
			))}
		</SpeedDial>
	</Container>
  )
}

export default App
