import { useEffect, useState } from 'react'
import './App.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import * as VolPlayer from './web_vol_lib/vol_player.mjs';
import { video } from './web_vol_lib/vol_av.mjs';
import { Float32BufferAttribute, Uint16BufferAttribute } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';

var volo_mesh = {};
var volo_geometry = {};
var volo_texture;
var scene_obj;

let renderer;
let reticle;
let camera;
let controller;
let hitTestSource = null;
let hitTestSourceRequested = false;

const MAX_POINTS = 30000
var positions;
var tex_coords;

function App() {
	const scene = new THREE.Scene();
	
	useEffect(() => {

    	camera = new THREE.PerspectiveCamera(
      		50, 
      		window.innerWidth / window.innerHeight,
      		0.1, 1000
    	);
    	camera.position.z = 5;

    	const canvas = document.getElementById('threeCanvas');
    	renderer = new THREE.WebGLRenderer({
      		canvas, antialias: true, alpha: true,
    	});
    	renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.xr.enabled = true;
    	document.body.appendChild(renderer.domElement);

		const controls = new OrbitControls(camera, renderer.domElement);

		const stats = Stats();
		document.body.appendChild(stats.dom);

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

		async function xr_check() {		
			if (await navigator.xr.isSessionSupported('immersive-ar')) {
				document.body.appendChild( 
					ARButton.createButton( renderer, {
						requiredFeatures: [ 'hit-test' ]
					} )
				);
			}
		}
		xr_check();

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
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	async function start_vol_player() {
		await VolPlayer.init();

		volo_texture = new THREE.VideoTexture(
			video
		);
		video.format = THREE.RGBFormat;

		volo_geometry = new THREE.BufferGeometry();
		volo_geometry.name = 'vologram_geom';
		positions = new Float32Array(MAX_POINTS * 3);
		volo_geometry.setAttribute( 
			'position',
			new THREE.BufferAttribute(positions, 3)
		);
		tex_coords = new Float32Array(MAX_POINTS * 2);
		volo_geometry.setAttribute( 
			'uv',
			new Float32BufferAttribute(tex_coords, 2)
		);
		var ind = new Uint16Array(MAX_POINTS);
		volo_geometry.setIndex( new Uint16BufferAttribute(ind, 1) )

		const mat = new THREE.MeshBasicMaterial( { 
				color: 0xffffff, 
				map: volo_texture
			} );
		volo_mesh = new THREE.Mesh(volo_geometry, mat);
		volo_mesh.name = 'Vologram';
		volo_mesh.scale.x = 0.5;
		volo_mesh.scale.y = 0.5;
		volo_mesh.scale.z = 0.5;
		scene.add(volo_mesh);

		await VolPlayer.open(
			'/src/assets/calif/header.vols', 
			'/src/assets/calif/sequence_0.vols', 
			'/src/assets/calif/output.mp4');
		
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
		console.log(scene);
		console.debug(volo_geometry);
	}

	function clear_console() {
		console.clear();
	}

	function stop_player() {
		volo_mesh.remove(volo_geometry);
		scene.remove(volo_mesh);
		VolPlayer.close();
	}

	function render( timestamp, frame ) {
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

  	return (
    <div>
		<button onClick={start_vol_player}>Load OBJ</button>
		<button onClick={print_scene}>Print Scene</button>
		<button onClick={stop_player}>Stop Player</button>
		<button onClick={clear_console}>Clear Console</button>
		<div>
			<canvas id="threeCanvas"/>
		</div>
    </div>
	
  )
}

export default App
