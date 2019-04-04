document.getElementById("button1").addEventListener("click", getFullMediaURL1);
document.getElementById("button2").addEventListener("click", getFullMediaURL2);
document.getElementById("button3").addEventListener("click", getFullMediaURL3);
document.getElementById("button4").addEventListener("click", getFullMediaURL4);
document.getElementById("button5").addEventListener("click", getFullMediaURL5);
document.getElementById("button6").addEventListener("click", getFullMediaURL6);
        
function getFullMediaURL1() {
    playMP3(cordova.file.applicationDirectory + 'www/audio/meme/1airhorn.mp3');
}
function getFullMediaURL2() {
    playMP3(cordova.file.applicationDirectory + 'www/audio/meme/2sanic.mp3');
}
function getFullMediaURL3() {
    playMP3(cordova.file.applicationDirectory + 'www/audio/meme/3wow.mp3');
}
function getFullMediaURL4() {
    playMP3(cordova.file.applicationDirectory + 'www/audio/meme/4spooky.mp3');
}
function getFullMediaURL5() {
    playMP3(cordova.file.applicationDirectory + 'www/audio/meme/5rick.aac');
}
function getFullMediaURL6() {
    playMP3(cordova.file.applicationDirectory + 'www/audio/meme/6ricardo.aac');
}

function playMP3(mediaSource) {
    let src = mediaSource;
    var myMedia =
    new Media(src,
        function () { },
        function (e) { alert('Media Error: ' + JSON.stringify(e)); }
    );
    myMedia.play();
}