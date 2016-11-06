var fS = 1;

function mute() {
 afterVolume = document.getElementById('volume').value;
 document.getElementById('musicNum').volume = 0;
 document.getElementById('mute').disabled = true;
 document.getElementById('unMute').disabled = false;
 document.getElementById('volume').value = 0;
 document.getElementById('volume').disabled = true;
}

function unMute() {
 document.getElementById('volume').value = afterVolume;
 document.getElementById('mute').disabled = false;
 document.getElementById('unMute').disabled = true;
 document.getElementById('volume').disabled = false;
}

function pausea() {
 checkIfDisable = checkIfDisable + 1;
 document.getElementById('musicNum').pause();
 document.getElementById('pause').disabled = true;
 document.getElementById('unPause').disabled = false;
 checkIfDisableFunction();
}

function unPausea() {
 checkIfDisable = checkIfDisable - 1;
 document.getElementById('musicNum').play();
 document.getElementById('pause').disabled = false;
 document.getElementById('unPause').disabled = true;
 checkIfDisableFunction();
}
function volumeChanger() {
 document.getElementById('musicNum').volume = document.getElementById('volume').value / 10000;
 document.getElementById('volumeDisplay').innerHTML = document.getElementById('volume').value/100;
}

function mute_iframe() {
 document.getElementById('musicNum').volume = 0;
 document.getElementById('mute').disabled = true;
 document.getElementById('unMute').disabled = false;
}

function unMute_iframe() {
 document.getElementById('mute').disabled = false;
 document.getElementById('unMute').disabled = true;
 document.getElementById('musicNum').volume = 1;
}

function pausea_iframe() {
 document.getElementById('musicNum').pause();
 document.getElementById('pause').disabled = true;
 document.getElementById('unPause').disabled = false;
}

function unPausea_iframe() {
 document.getElementById('musicNum').play();
 document.getElementById('pause').disabled = false;
 document.getElementById('unPause').disabled = true;
}

function nextSong() {
 document.getElementById('musicNum').currentTime = document.getElementById('musicNum').duration;
}

function restartSong() {
 document.getElementById('musicNum').currentTime = 0;
 minutes = 0;
 hours = 0;
 secondChecker = '0';
 minuteChecker = '0';
}

function speedRate() {
fS = Number(Math.floor(document.getElementById('speedD').value));
fS2 = fS / 100;
document.getElementById('musicNum').playbackRate = fS2;
document.getElementById('speedArea').innerHTML = fS2;
}

function enableBar() {
 checkIfDisable = checkIfDisable - 1;
 document.getElementById('enaBtn').disabled = true;
 document.getElementById('disBtn').disabled = false;
 checkIfDisableFunction();
}

function disableBar() {
 checkIfDisable = checkIfDisable + 1;
 document.getElementById('enaBtn').disabled = false;
 document.getElementById('disBtn').disabled = true;
 checkIfDisableFunction();
}

function checkIfDisableFunction() {
 if (checkIfDisable == 0) {
   document.getElementById('progressTime').disabled = false;
 } else {
  document.getElementById('progressTime').disabled = true;
 }
}

function changeTheme() {
 document.getElementById('stylingLink').href = 'styling/musicplayer' + document.getElementById('styleInput').value + '.css';
}
