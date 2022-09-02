import initModule from "./a.out.js";

const NUM = 'number';
const BOOL = 'boolean';
const STR = 'string';

var prev_read_frame;
var prev_read_keyframe;
var loaded_paths = [];

var Module = {};

export var vp = [];
export var vp_sz = -1;
export var uv = [];
export var uv_sz = -1;
export var ind = [];
export var ind_sz = -1;
export var is_key = false;

export function init() {
    Module.onRuntimeInitialized = _ => {
		var v = Module.ccall('version', [NUM]);
		console.log('version.minor=' + v);
	};
    console.log('vol_player.init()');
    initModule(Module);
}

export async function init_sync() {
    await new Promise(function(resolve, reject) {
        try {
            Module.onRuntimeInitialized = _ => {
                var v = Module.ccall('version', [NUM]);
                console.log(Module);
                resolve(v);
            };
            initModule(Module);
        }
        catch(err) {
            reject(err);
        }
    })
    .then((v) => console.log('version.minor=' + v))
    .catch((err) => console.error(err));
}

export function create_file_info(hdr_filename, seq_filename) {
    return Module.ccall('create_file_info', BOOL, [STR, STR], [hdr_filename, seq_filename]);
}

export async function create_file_info_sync(hdr_filename, seq_filename) {
    var res = false;
    await execute_promise(
        () => create_file_info(hdr_filename, seq_filename),
        (r) => res = r,
        (err) => console.error(err)
    );
    loaded_paths = [hdr_filename, seq_filename];
    return res;
}

export function free_file_info() {
    var b = Module.ccall('free_file_info', BOOL);
    loaded_paths.forEach((p) => tidy_fs(p));
    return b;
}

function tidy_fs(path) {
    let path_info = Module.FS.analyzePath(path);
    let parent_path = path_info.parentPath;
    
    if (path_info.object.isFolder && !path_info.isRoot) {
        Module.FS.rmdir(path);
    } 
    else {
        Module.FS.unlink(path);
    }

    let has_siblings = Module.FS.readdir(parent_path).length > 2;
    if (!has_siblings) {
        tidy_fs(parent_path);
    }
}

export async function free_file_info_sync() {
    var res = false;
    await execute_promise(
        free_file_info,
        (b) => res = b,
        (err) => console.error(err)
    );
    return res;
}

export function read_frame_data(frame_idx) {
    var prev_key = Module.ccall('find_previous_keyframe', NUM, [NUM], [frame_idx]);
    is_key = Module.ccall('is_keyframe', BOOL, [NUM], [frame_idx]);
    if (!is_key && prev_read_keyframe != prev_key) {
        Module.ccall('read_frame', BOOL, [NUM], [prev_key]);

        uv_sz = Module.ccall('frame_uvs_sz', NUM);
        var uv_cop = Module.ccall('frame_uvs_copied', NUM);
        uv = new Float32Array(Module.HEAP8.buffer, uv_cop, uv_sz / 4);

        ind_sz = Module.ccall('frame_i_sz', NUM);
        var i_cop = Module.ccall('frame_indices_copied', NUM);
        ind = new Uint16Array(Module.HEAP8.buffer, i_cop, ind_sz / 2);

        prev_read_keyframe = prev_key;
    }

    Module.ccall('read_frame', BOOL, [NUM], [frame_idx]);

    vp_sz = Module.ccall('frame_vertices_sz', NUM);
    var vp_copied = Module.ccall('frame_vp_copied', NUM);
    vp = new Float32Array(Module.HEAP8.buffer, vp_copied, vp_sz / 4);

    if (is_key) {
        uv_sz = Module.ccall('frame_uvs_sz', NUM);
        var uv_cop = Module.ccall('frame_uvs_copied', NUM);
        uv = new Float32Array(Module.HEAP8.buffer, uv_cop, uv_sz / 4);

        ind_sz = Module.ccall('frame_i_sz', NUM);
        var i_cop = Module.ccall('frame_indices_copied', NUM);
        ind = new Uint16Array(Module.HEAP8.buffer, i_cop, ind_sz / 2);

        prev_read_keyframe = frame_idx;
    }

    prev_read_frame = frame_idx;

    return true;
}

export function read_frame(frame_idx) {
    return Module.ccall('read_frame', BOOL, [NUM], [frame_idx]);
}

export async function read_frame_sync(frame_idx) {
    var res = false;
    await execute_promise(
        () => read_frame(frame_idx),
        (r) => res = r,
        (err) => console.error(err)
    );
    return res;
}

export function is_keyframe(frame_idx) {
    return Module.ccall('is_keyframe', BOOL, [NUM], [frame_idx]);
}

export async function is_keyframe_sync(frame_idx) {
    var res = false;
    await execute_promise(
        () => is_keyframe(frame_idx),
        (r) => res = r,
        (err) => console.error(err)
    );
    return res;
}

export function find_previous_keyframe(frame_idx) {
    return Module.ccall('find_previous_keyframe', NUM, [NUM], [frame_idx]);
}

export async function find_previous_keyframe_sync(frame_idx) {
    var res = 0;
    await execute_promise(
        () => find_previous_keyframe(frame_idx),
        (r) => res = r, 
        (err) => console.error(err)
    );
    return res;
}

/* TODO: Return pointer???
export function frame_vertices() {
    return Module.ccall('frame_vertices', NUM);
}

export async function frame_vertices_sync() {
    var res = 0;
    await execute_promise(
        () => frame_vertices(),
        (r) => res = r,
        (err) => console.error(err)
    ); 
    return res;
}
*/

export function frame_vertices_sz() {
    return Module.ccall('frame_vertices_sz', NUM);
}

export async function frame_vertices_sz_sync() {
    var res = 0;
    await execute_promise(
        () => frame_vertices_sz(),
        (r) => res = r, 
        (err) => console.error(err)
    );
    return res;
}

export function frame_uvs_sz() {
    return Module.ccall('frame_uvs_sz', NUM);
}

export async function frame_uvs_sz_sync() {
    var res = 0;
    await execute_promise( 
        () => frame_uvs_sz(),
        (r) => res = r, 
        (err) => console.error(err)
    );
    return res;
}

/* TODO: Return pointer???
export function frame_indices() {
    return Module.ccall('frame_i', NUM);
}
*/

export function frame_indices_sz() {
    return Module.ccall('frame_i_sz', NUM);
}

export async function frame_indices_sz_sync() {
    var res = 0;
    await execute_promise(
        () => frame_indices_sz(),
        (r) => res = r,
        (err) => console.error(err)
    );
    return res;
}

/* TODO: Return pointer???
export function frame_data_ptr() {
    return Module.ccall('frame_data_ptr', NUM);
}
*/

export function frame_vp_offset() {
    return Module.ccall('frame_vp_offset', NUM);
}

export async function frame_vp_offset_sync() {
    var res = 0;
    await execute_promise(
        () => frame_vp_offset(),
        (r) => res = r,
        (err) => console.error(err)
    );
    return res;
}

export function frame_vp_copied() {
    var sz = frame_vertices_sz();
    var vp = Module.ccall('frame_vp_copied', NUM);
    return new Float32Array(Module.HEAP8.buffer, vp, sz / 4);
}

export async function frame_vp_copied_sync() {
    var res = [];
    await execute_promise(
        async function () {
            var sz = await frame_vertices_sz_sync();
            var vp = Module.ccall('frame_vp_copied', NUM);
            return new Float32Array(Module.HEAP8.buffer, vp, sz / 4);
        },
        (r) => res = r, 
        (err) => console.error(err)
    );
    return res;
}

export function frame_uvs_copied() {
    var sz = frame_uvs_sz();
    var uvs = Module.ccall('frame_uvs_copied', NUM);
    return new Float32Array(Module.HEAP8.buffer, uvs, sz / 4);
}

export async function frame_uvs_copied_sync() {
    var res = [];
    await execute_promise(
        () => frame_uvs_copied(),
        (r) => res = r,
        (err) => console.error(err)
    );
    return res;
}

export function frame_indices_copied() {
    var sz = frame_indices_sz();
    var inds = Module.ccall('frame_indices_copied', NUM);
    return new Uint16Array(Module.HEAP8.buffer, inds, sz / 2);
}

export async function frame_indices_copied_sync() {
    var res = [];
    await execute_promise(
        async function() {
            var sz = await frame_indices_sz_sync();
            var inds = Module.ccall('frame_indices_copied', NUM);
            return new Uint16Array(Module.HEAP8.buffer, inds, sz / 2);
        },
        (r) => res = r,
        (err) => console.error(err)
    );
    return res;
}

async function execute_promise(func, success, fail) {
    await new Promise( function(resolve, reject) {
        try {
            var r = func();
            resolve(r);
        }
        catch (err) {
            reject(err);
        }
    })
    .then((r) => success(r))
    .catch((err) => fail(err));
}