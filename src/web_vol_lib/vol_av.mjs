const tag = 'video';
export const video_element_id = '__volo__tex';
export var video;
var video_frame_callback = () => {};
var is_playing = false;

var fps = 30;

export function init() {
    video = document.createElement(tag);
    video.id = video_element_id;
}

export function open(url, options) {
	video.autoplay = options?.autoplay ?? false;
	video.muted = options?.muted ?? true; // Must be true for play without page interaction: https://goo.gl/xX8pDD
	video.loop = options?.loop ?? true;
	video.preload = options?.preload ?? true;
    video.src = url;
    fps = options?.fps ?? fps;
}

export function set_video_frame_callback(callback) {
    video_frame_callback = function (now, meta) {
        callback( Math.trunc(meta.mediaTime * fps) );
        if (is_playing) {
            video.requestVideoFrameCallback( video_frame_callback );
        }
    }
} 

export function start() {
    video.play();
    is_playing = true;
    video.requestVideoFrameCallback( video_frame_callback );
}

export function resume() {
    video.play();
}

export function pause() {
    video.pause();
}

export function close() {
    video.pause();
    video_frame_callback = () => {}
    is_playing = false;
    video.remove();
}