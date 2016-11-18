var trackNumber = 0;

function nextTrack() {
 trackNumber = trackNumber + 1;
 updateStuff();
}

function previousTrack() {
 trackNumber = trackNumber - 1;
 updateStuff();
}

function checkMusic() {
 
}

function updateStuff() {
 document.getElementById('trackNum').innerHTML = trackNumber;
}
