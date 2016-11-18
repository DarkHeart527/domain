var trackNumber = 0;

function nextTrack() {
 trackNumber = trackNumber + 1;
}

function previousTrack() {
 trackNumber = trackNumber - 1;
}

function checkMusic() {
 
}

function updateStuff() {
 document.getElementById('trackNum').innerHTML = trackNumber;
}
