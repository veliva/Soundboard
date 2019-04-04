var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.getElementById("birdButton").addEventListener("click", toBirdSounds);
document.getElementById("carButton").addEventListener("click", toCarSounds);
document.getElementById("policeButton").addEventListener("click", toPoliceSounds);
document.getElementById("memeButton").addEventListener("click", toMemeSounds);

function toBirdSounds() {
    window.location.href = "birdSounds.html";
}

function toCarSounds() {
    window.location.href = "carSounds.html";
}
function toPoliceSounds() {
    window.location.href = "policeSounds.html";
}
function toMemeSounds() {
    window.location.href = "memeSounds.html";
}