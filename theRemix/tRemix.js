var trackNumber = 0;
var savedNumber = 0;

function nextTrack() {
 trackNumber = Number(trackNumber + 1);
 savedNumber = trackNumber;
 updateStuff();
}

function previousTrack() {
 trackNumber = Number(trackNumber - 1);
 savedNumber = trackNumber;
 updateStuff();
}

function checkMusic() {
 if (trackNumber == 0) {
  document.getElementById('').src = '';
 } else {
  trackNumber = savedNumber;
  updateStuff();
 }
}

function updateStuff() {
 document.getElementById('trackNum').innerHTML = trackNumber;
}
