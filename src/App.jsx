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
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry';
import { create_vr_session } from './pdg_xr_helpers/pdg_vr_helper.mjs';
import { begin_hit_test, click_controller, create_ar_session, hit_test_source } from './pdg_xr_helpers/pdg_ar_helper.mjs';

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

		controller = click_controller( renderer, onSelect );
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

	async function onSelect() {
		console.debug('onSelect');
		if ( reticle.visible ) {
			if ( !scene.getObjectByName( volo_mesh.name ) )
			{
				await start_vol_player();
			}
			console.debug(volo_mesh);
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

		start_vol_player();
	}

	function deinit_vr() {
		vr_touch_end( null );
		current_mode = NOR;

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
			const session = renderer.xr.getSession();
			let hitTestSource = hit_test_source( session );
			if ( hitTestSource ) {
				const hitTestResults = frame.getHitTestResults( hitTestSource );
				const referenceSpace = renderer.xr.getReferenceSpace();
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
	}

	function start_vr() {
		create_vr_session( init_vr, ( error ) => {
			console.error( error );
		} );
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
		session.addEventListener( 'end', stop_xr );
		current_mode = VR;
		xr_session = session;
		start_vol_player();
	}

	function start_ar() {
		create_ar_session( init_ar, ( error ) => {
			console.error( error );
		} );
	}

	function init_ar( session ) {
		console.debug( session );
		camera = new THREE.PerspectiveCamera( 
			50, window.innerWidth / window.innerHeight, 0.1, 10 );
		camera.position.set( 0, 1.6, 3 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.xr.enabled = true;
		renderer.xr.setSession( session );
		begin_hit_test( session );
		session.addEventListener( 'end', stop_xr );
		current_mode = AR;
		xr_session = session;
	}

	function stop_xr() {
		canvas_container = document.getElementById( 'canvas-container' );
    	camera = new THREE.PerspectiveCamera(
          	50, 
          	canvas_container.offsetWidth / canvas_container.offsetHeight,
        	0.1, 1000
    	);

    	renderer.setPixelRatio( window.devicePixelRatio );
    	renderer.setSize(canvas_container.offsetWidth, canvas_container.offsetHeight);
		non_r_controls = new OrbitControls(camera, renderer.domElement);
		non_r_controls.target.set(0, 1.6, 0);
    	camera.position.set( 0, 1.6, 3 );
    	camera.rotation.set( 0, 0, 0 );
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
		disableGutters
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
