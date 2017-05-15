var trackNumber = 0;
var savedNumber = 0;
var link = 'music/';
var title = '';
var endTimev = 0;
var endtimeM = 0;
var endtimeH = 0;
var checkEndv;
var checkEndM;
var colonQH;
var trackSrc;

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
 document.getElementById('downloadTrack').href = trackSrc;
 if (trackNumber == 0) {
  document.getElementById('audioFile').src = '';
  title = 'No Song Selected';
  endTimev = 0;
  endtimeM = 0;
  endtimeH = 0;
  document.getElementById('currentTime').innerHTML = ''
 } else if (trackNumber == 1) {
  document.getElementById('audioFile').src = link + 'Right Now.mp3';
  trackSrc = link + 'Right Now.mp3'
  title = "Right Now";
 } else if (trackNumber == 2) {
  document.getElementById('audioFile').src = link + 'Alright.mp3';
  trackSrc = link + 'Alright.mp3'
  title = "Alright";
 } else if (trackNumber == 3) {
  document.getElementById('audioFile').src = link + 'Like Me.mp3';
  trackSrc = link + 'Like Me.mp3'
  title = "Like Me";
 } else {
  trackNumber = savedNumber;
  updateStuff();
 }
	document.getElementById('audioFile').onloadeddata = function() {
	endTimev = 0;
	endtimeH = 0;
	endtimeM = 0;
	endTimev = Math.floor(document.getElementById('audioFile').duration)
	}
 updateText();
}

function speedUpdater() {
	if (endTimev > 59) {
	 endTimev = endTimev - 60;
	  endtimeM = endtimeM + 1;
	}
	if (endtimeM > 59) {
	 endtimeM  = endtimeM - 60;
	 endtimeH = endtimeH + 1;
	}
	if (endTimev < 10) {
	 checkEndv = '0';
	} else {
	 checkEndv = '';
	}
	if (endtimeM < 10) {
	 checkEndM = '0';
	} else {
	 checkEndM = '';
	}
	if (endtimeH < 10) {
	 checkEndH = '0';
	} else {
	 checkEndH = '';
	}
	if (endTimev == 0) {
	 endTimev = '';
	 checkEndv = '';
	 document.getElementById('slash').innerHTML = ''
	} else {
	 document.getElementById('slash').innerHTML = ' / '
	}
	if (endtimeM == 0) {
	 endtimeM = '';
	 checkEndM = '';
	 colonQM = '';
	} else {
	 colonQM = ':'
	}
	if (endtimeH == 0) {
	 endtimeH = '';
	 checkEndH = '';
	 colonQH = '';
	} else {
	  colonQH = ':';
	 }
	 document.getElementById('currentTime').innerHTML = document.getElementById('audioFile').currentTime
	endTimeFinish = checkEndH + endtimeH + colonQH + checkEndM + endtimeM + colonQM + checkEndv + endTimev;
 document.getElementById('endTime').innerHTML = endTimeFinish
 }

function updateStuff() {
 document.getElementById('trackNum').innerHTML = trackNumber;
 }

function updateCurrent() {
 
}

function updateText() {
 document.getElementById('title').innerHTML = title;
}

function loader() {
endTimev = 0;
 setInterval( function() {speedUpdater()}, 10);
}
