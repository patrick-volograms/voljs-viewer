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
    if (video == null) {
        console.warn('video is not initialised, call init() first');
        return;
    }

	video.autoplay = options?.autoplay ?? false;
	video.muted = options?.muted ?? false;  // Allow audio with vologram, but requires a page gesture to be detected first. This is also required on most browsers for any muted playback.
    video.loop = options?.loop ?? true;
	video.preload = options?.preload ?? true;
    video.src = url;
    fps = options?.fps ?? fps;
}

export function set_video_frame_callback(callback) {
    if (video == null) {
        console.warn('video is not initialised, call init() first');
        return;
    }

		// Note: 'metadata' is only supported in some browsers, but essential for good video texture sync.
		// Otherwise use this callback; `callback( Math.trunc(video.currentTime * fps));`
    video_frame_callback = (now, metadata) => {
        callback( Math.floor( metadata.mediaTime * fps ) );
        if (is_playing) {
            video.requestVideoFrameCallback( video_frame_callback );
        }
    }
}

// Note(Anton): we need to capture a gesture to start playback (especially with audio).
// There is probably a more elegant way to do this, because it requires a click into space first at the moment.
document.onclick = function() {
    if (video == null) {
        console.warn('video is not initialised, call init() first');
        return;
    }

    video.play();
    is_playing = true;
    video.requestVideoFrameCallback( video_frame_callback );
}

// Original function here (replaced by document.onclick for now).
export function start() {
    /*if (video == null) {
        console.warn('video is not initialised, call init() first');
        return;
    }

    video.play();
    is_playing = true;
    video.requestVideoFrameCallback( video_frame_callback );*/
}

export function resume() {
    if (video == null) {
        console.warn('video is not initialised, call init() first');
        return;
    }

    video.play();
}

export function pause() {
    if (video == null) {
        console.warn('video is not initialised, call init() first');
        return;
    }

    video.pause();
}

export function close() {
    if (video == null) {
        console.warn('video is not initialised, call init() first');
        return;
    }
    
    video?.pause();
    video_frame_callback = () => {}
    is_playing = false;
    video?.remove();
}
