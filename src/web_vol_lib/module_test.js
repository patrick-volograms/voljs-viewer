import * as VolGeom from "./vol_geom.mjs";
import * as VolAv from "./vol_av.mjs";
import * as VolPlayer from "./vol_player.mjs";

/*
await VolGeom.init_sync();
console.log('Init complete');
var b = await VolGeom.create_file_info_sync("calif/header.vols", "calif/sequence_0.vols");
console.log('files opened = ' + b);
b = await VolGeom.read_frame_sync(0);
console.log('read success = ' + b);
b = await VolGeom.is_keyframe_sync(0);
var b1 = await VolGeom.is_keyframe_sync(1);
console.log('frame 0/1 keyframe = ' + b + '/' + b1);
b = await VolGeom.frame_vertices_sz_sync();
b1 = await VolGeom.frame_uvs_sz_sync();
var b2 = await VolGeom.frame_indices_sz_sync();
var b3 = await VolGeom.frame_vp_offset_sync();
console.log('vert sz, uvs sz, ind sz, vert off = ' + b + ', ' + b1 + ', ' + b2 + ', ' + b3);
b = await VolGeom.frame_vp_copied_sync();
b1 = await VolGeom.frame_uvs_copied_sync();
b2 = await VolGeom.frame_indices_copied_sync();
console.log('vert arr len, uvs arr len, ind arr len = ' + b.length + ', ' + b1.length + ', ' + b2.length);
//b = await VolGeom.free_file_info_sync();
//console.log('files closed = ' + b);

var frameNumber = 0;
VolAv.init('/calif/output.mp4');
VolAv.set_video_frame_callback(async function(frameNumber) {
    b = await VolGeom.read_frame_sync(frameNumber);
    console.log('frame ' + frameNumber + ' loaded = ' + b);
});
VolAv.start();

setTimeout(() => VolAv.pause(), 5000);
setTimeout(() => VolAv.resume(), 10000);*/

await VolPlayer.init();
await VolPlayer.open("/calif/header.vols", "/calif/sequence_0.vols", '/calif/output.mp4');
VolPlayer.start();
setTimeout(() => VolPlayer.pause(), 5000);
setTimeout(() => VolPlayer.resume(), 10000);