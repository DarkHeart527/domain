var trackNumber = 0;
var savedNumber = 0;
var link = 'music/';

function nextTrack() {
 trackNumber = Number(trackNumber + 1);
 updateStuff();
 checkMusic();
 savedNumber = trackNumber;
}

function previousTrack() {
 trackNumber = Number(trackNumber - 1);
 updateStuff();
 checkMusic();
 savedNumber = trackNumber;
}

function checkMusic() {
 if (trackNumber == 0) {
  document.getElementById('audioFile').src = '';
 } else if (trackNumber == 1) {
  document.getElementById('audioFile').src = link + 'Right Now.mp3';
  document.getElementById('title').innerHTML = "Right Now";
 } else if (trackNumber == 2) {
  document.getElementById('audioFile').src = link + 'Alright.mp3';
  document.getElementById('title').innerHTML = "Alright";
 } else if (trackNumber == 3) {
  document.getElementById('audioFile').src = link + 'Like Me.mp3';
  document.getElementById('title').innerHTML = "Like Me";
 } else {
  trackNumber = savedNumber;
  updateStuff();
 }
}

function updateStuff() {
 document.getElementById('trackNum').innerHTML = trackNumber;
}
