const audio = require("nativescript-audio");
const player = new audio.TNSPlayer();

function onPlay() {
    player.playFromUrl({
        audioFile: 'http://66.85.88.18:5475/live.mp3',
        loop: false,
        errorCallback: (args) => {
            alert('Error: See console for error info.');
            console.log("reference back to player:", args.player);
            console.log("the error:", args.error);
        }
    }).then(() => {
        alert('Success: Audio now playing.');
    });
}

exports.onPlay = onPlay;