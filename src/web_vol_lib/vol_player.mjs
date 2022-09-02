import * as VolGeom from "./vol_geom.mjs";
import * as VolAv from "./vol_av.mjs";

var frame_ready_callback = () => {};

var verts;
var uvs;
var inds;
var is_key = false;
var is_playing = false;
var prev_loaded_key_frame = -1;
var last_loaded_frame = -1;

export async function init() {
    await VolGeom.init_sync();
    VolAv.init();
}

export async function open(hdr, seq, vid, vid_options) {
    await VolGeom.create_file_info_sync(hdr, seq);
    VolAv.open(vid, vid_options);

    VolAv.set_video_frame_callback(async function(frame_number) {
        if (!is_playing) return;
        if (frame_number == last_loaded_frame) return;
        if (frame_number != last_loaded_frame + 1) {
            console.warn('Frame jump from ' + last_loaded_frame + ' to ' + frame_number);
        }

        is_key = await VolGeom.is_keyframe_sync(frame_number);
        if (!is_key) {
            var prev_key = await VolGeom.find_previous_keyframe_sync(frame_number);
            if (prev_key != prev_loaded_key_frame) {
                console.warn('recovering key frame ' + prev_key);
                await VolGeom.read_frame_sync(prev_key); 
                uvs = await VolGeom.frame_uvs_copied_sync();
                inds = await VolGeom.frame_indices_copied_sync();
                prev_loaded_key_frame = prev_key;
            }
        }
        var b = await VolGeom.read_frame_sync(frame_number);
        
        verts = await VolGeom.frame_vp_copied_sync();
        if (is_key) {
            uvs = await VolGeom.frame_uvs_copied_sync();
            inds = await VolGeom.frame_indices_copied_sync();
            prev_loaded_key_frame = frame_number;
        }
        last_loaded_frame = frame_number;
        frame_ready_callback(frame_number, is_key, verts, uvs, inds);
    });
}

export function set_frame_callback(callback) {
    frame_ready_callback = callback;
}

export function start() {
    VolAv.start();
    is_playing = true;
}

export function pause() {
    VolAv.pause();
    is_playing = false;
}

export function resume() {
    VolAv.resume();
    is_playing = true;
}

export function close() {
    VolAv.close();
    VolGeom.free_file_info();
    is_playing = false;
    last_loaded_frame = -1;
}