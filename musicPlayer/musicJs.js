 function engageAdText() {
  adType = Number(Math.floor(Math.random() * 1 + 1));
  if (adType == 1) {
   adNumber = Math.floor(Math.random() * 1 + 1);
   if (adNumber == 1) {
	document.getElementById('notificationText').innerHTML = "<a href='http://pocketband.net' class='gChrome'>Pocket Band</a><br />Want to make some great music?<br />Download this app now, but I must warn you I'ts very hard to make great music so ask others for help";
   } else {
	document.getElementById('notificationText').innerHTML = 'No ad available <br />Ad Number: ' + adNumber;
   }
  } else {
   document.getElementById('notificationText').innerHTML = '<span style="color: red">AD TYPE DOES NOT EXIST</b><br /><b style="color: red">Ad Type: ' + adType;
  }
  notiOnReg();
 }

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

 
function notiOnReg() {
 document.getElementById('notification').style = 'margin-top: 50px;';
}
 
function change0() {
 musicId = Math.floor( Math.random() * 1000 + 1);
}

function reloadAssets() {
 saveLast = document.getElementById('stylingLink').href;
 console.clear()
 console.info('Reloading Assets');
 document.getElementById('stylingLink').href = '';
 console.info('Assets Deleted Waiting 1.5 Seconds');
 setTimeout( function() { loadAssets(); }, 500);
}

function loadAssets() {
 document.getElementById('stylingLink').href = saveLast;
 console.info('Reload Complete');
 document.getElementById('notificationText').innerHTML = 'Successfully Reloaded Assets!';
 notiOnReg();
}

function autoUpdater() {
if(adTimeLeft == 0) {
 document.getElementById('notification').style = 'margin-top: -500px;"';
}
   seconds = Math.floor(timeAudio) + 1 - minutes*60;
   if (seconds > 59) {
    seconds = 0;
	minutes = minutes + 1;
   }
   if (seconds < 0) {
    seconds = seconds + 59;
	minutes = minutes - 1;
   }
   if (minutes > 59) {
    minutes = 0;
	hours = hours + 1;
   }
   if (minutes < 0) {
    minutes = minutes + 59;
	hours = hours - 1;
   }
   if (minutes < 10) {
    minuteChecker = '0';
   } else {
    minuteChecker = '';
   }
   if (seconds < 10) {
    secondChecker = '0';
   } else {
    secondChecker = '';
   }
   timeDisplay = hours + ":" + minuteChecker + minutes + ":" + secondChecker + seconds;
   document.getElementById('timeDisplayArea').innerHTML = timeDisplay;
   timeAudio = document.getElementById('musicNum').currentTime;
 if (document.getElementById('musicNum').ended == true) {
 if (document.getElementById('type').value == "all") {
  musicId = document.getElementById('selector').value;
  checkAndPlay();
  } else if (document.getElementById('type').value == "pocketband") {
   musicId = document.getElementById('selector').value;
   checkAndPlay();
  } else if (document.getElementById('type').value == "isaiahsPlaylist") {
   musicId = document.getElementById('selector').value;
   checkAndPlay();
  } else if (document.getElementById('type').value == "author_Drake") {
   musicId = document.getElementById('selector').value;
   checkAndPlay();
  } else if (document.getElementById('type').value == "author_21Savage") {
   musicId = document.getElementById('selector').value;
   checkAndPlay();
  }
 } else if (document.getElementById('musicNum').ended == false) {
  
 }
 document.getElementById('notificationTextTimer').innerHTML = 'Time Left: ' + adTimeLeft; 
}

function canWait() {
   document.getElementById('progressTime').value = document.getElementById('musicNum').currentTime * 50;
   document.getElementById('title').innerHTML = title;
   document.getElementById('author').innerHTML = author;
   adTimeKeeper = adTimeKeeper - 1;
   if (adTimeKeeper == 0) {
	adTimeLeft = 30;
	adTimeKeeper = 150;
	engageAdText();
   }
   if (adTimeLeft > 0) {
	adTimeLeft = adTimeLeft - 1;
   } else {
	
   }
}

function autoUpdater_iframe() {
 if (document.getElementById('musicNum').ended == true) {
  change0();
  checkAndPlay();
 } else if (document.getElementById('musicNum').ended == false) {
  
 }
}

function changeEle() {
 musicId = document.getElementById('selector').value;
 document.getElementById('musicNum').currentTime = 999999999 * 999;
 checkAndPlay();
}

function firstLoad() {
 document.getElementById('notificationText').innerHTML = 'Welcome, for the<b class="bestR"> BEST </b>results please use <a class="gChrome" href="https://chrome.google.com">google chrome</a>, thank you.<br />Tell me how my notification bar is! Is it good, bad, excellent, horrible, if not what is it?';
 notiOnReg();
 change0();
 checkAndPlay();
 setInterval( function() { autoUpdater(); }, 50);
 setInterval( function() { canWait(); }, 1000);
}

function firstLoad_iframe() {
 change0();
 checkAndPlay();
  setInterval( function() { autoUpdater_iframe(); }, 50);
}

function checkAndPlay() {
minutes = 0;
hours = 0;
minuteChecker = '0';
secondChecker = '0';
 if (musicId == 0) {
  if (document.getElementById('type').value == "pocketband") {
   randomize();
   musicId = 'pb' + random;
   checkPb();
  } else if (document.getElementById('type').value == "isaiahsPlaylist") {
   randomize();
   musicId = 'iP' + random2;
   checkiP();
  } else if (document.getElementById('type').value == "author_Drake") {
   randomize();
   musicId = 'authDrake' + random3;
   auth_drake();
  } else if (document.getElementById('type').value == "author_21Savage") {
   randomize();
   musicId = 'auth21Savage' + random4;
   auth_21Savage();
  } else {
   change0();
   checkAndPlay();
  }
 }

 else if (musicId == 1) {
  document.getElementById('musicNum').src = link + "Cut Throat.mp3";
  title = "Cut Throat";
  author = "Iwey";
 } 
 
 else if (musicId == 2) {
  document.getElementById('musicNum').src = link + "Jordan Comolli - Contrast.mp3";
  title = "Contrast";
  author = "Trap Nation & Jordan Comolli";
 } 
 
 else if (musicId == 3) {
  document.getElementById('musicNum').src = link + "Trap Challenge.mp3";
  title = "Trap Challenge";
  author = "Lyric 313";
 }
 
 else if (musicId == 4) {
  document.getElementById('musicNum').src = link + "TrapShitFreeBeat2.mp3";
  title = "TrapShitFreeBeat2";
  author = "SYNIK";
 }
 
 else if (musicId == 5) {
  document.getElementById('musicNum').src = link + "KXA - Gladius.mp3";
  title = "Gladius";
  author = "Trap Nation & KXA";
 } 
 
 else if (musicId == 6) {
  document.getElementById('musicNum').src = link + "Lookas - Samurai.mp3";
  title = "Samurai";
  author = "Trap Nation & Lookas";
 } 
 
 else if (musicId == 7) {
  document.getElementById('musicNum').src = link + "THE TRAPPER.mp3";
  title = "THE TRAPPER";
  author = "KINGDEE";
 } 
 
 else if (musicId == 8) {
  document.getElementById('musicNum').src = link + "Isaiah Rap - Diss - Clarice.mp3";
  title = "T.H.O.T. (Clarice Diss)";
  author = "The Remix ft. The Game ";
 } 
 
  else if (musicId == 9) {
  document.getElementById('musicNum').src = link + "Chiraq instrumental.mp3";
  title = "Chiraq Instrumental";
  author = "Unknown";
 } 
 
  else if (musicId == 10) {
  document.getElementById('musicNum').src = link + "Kodak Black - Skrilla (Instrumental).mp3";
  title = "Skrilla - Instrumental";
  author = "Kodak Black";
 } 
 
  else if (musicId == 11) {
  document.getElementById('musicNum').src = link + "DISTO - Killa.mp3";
  title = "Killa";
  author = "DISTO";
} 
 
  else if (musicId == 12) {
  document.getElementById('musicNum').src = link + "NextRo - Saintz.mp3";
  title = "Saintz";
  author = "NextRo";
 } 
 
  else if (musicId == 13) {
  document.getElementById('musicNum').src = link + "Onderkoffer - Beast.mp3";
  title = "Beast";
  author = "Onderkoffer";
 } 
 
  else if (musicId == 14) {
  document.getElementById('musicNum').src = link + "Onderkoffer - FRNDZN.mp3";
  title = "FRNDZN";
  author = "Onderkoffer";
 } 
 
  else if (musicId == 15) {
  document.getElementById('musicNum').src = link + "10 Bands - Drake.mp3";
  title = "10 Bands";
  author = "Humble The Poet";
 } 
 
  else if (musicId == 16) {
  document.getElementById('musicNum').src = link + "LAXX - TWITCH.mp3";
  title = "TWITCH";
  author = "LAXX";
 } 
 
  else if (musicId == 17) {
  document.getElementById('musicNum').src = link + "21 Savage - Picky.mp3";
  title = "Picky ft. ";
  author = "21 Savage";
 } 

  else if (musicId == 18) {
  document.getElementById('musicNum').src = link + "Adding Fuel To Fire.mp3";
  title = "Adding Fuel To Fire";
  author = "Riskit";
 } 
 
  else if (musicId == 19) {
  document.getElementById('musicNum').src = link + "Thanatus.mp3";
  title = "Thanatus";
  author = "The Imp";
 } 
 
  else if (musicId == 20) {
  document.getElementById('musicNum').src = link + "1. Exordium.mp3";
  title = "1. Exordium";
  author = "Accept17";
 } 
 
  else if (musicId == 21) {
  document.getElementById('musicNum').src = link + "Angels And Demons,.mp3";
  title = "Angels And Demons,";
  author = "TripleMT";
 } 
 
  else if (musicId == 22) {
  document.getElementById('musicNum').src = link + "ATL Yuletide.mp3";
  title = "ATL Yuletide";
  author = "cjnoll";
 } 
 
  else if (musicId == 23) {
  document.getElementById('musicNum').src = link + "Dark Night,.mp3";
  title = "Dark Night,";
  author = "TripleMT";
 } 
 
  else if (musicId == 24) {
  document.getElementById('musicNum').src = link + "Axel Thesleff - Bad Karma.mp3";
  title = "Bad Karma";
  author = "Trap Nation & Axel Thesleff";
 } 
 
  else if (musicId == 25) {
  document.getElementById('musicNum').src = link + "Plastik.mp3";
  title = "Plastik";
  author = "Jed*";
 } 
 
  else if (musicId == 26) {
  document.getElementById('musicNum').src = link + "Drake - Headlines.mp3";
  title = "Headlines";
  author = "Drake";
 } 
 
  else if (musicId == 27) {
  document.getElementById('musicNum').src = link + "She Tatted Up.mp3";
  title = "She Tatted Up";
  author = "Synikal Beatz";
 } 
 
  else if (musicId == 28) {
  document.getElementById('musicNum').src = link + "eXtincTioN Prophe(Y.mp3";
  title = "eXtincTioN Prophe(Y";
  author = "Lex Kegger";
 } 

 else if (musicId == 29) {
  document.getElementById('musicNum').src = link + "Viaje.profundo.mp3";
  title = "Viaje.profundo";
  author = "lokosDj";
 } 
 
  else if (musicId == 30) {
  document.getElementById('musicNum').src = link + "Love&hustle..mp3";
  title = "Love&hustle.";
  author = "BeatzByLeepz";
 } 
 
  else if (musicId == 31) {
  document.getElementById('musicNum').src = link + "21 Savage & Metro Boomin - X ft Future.mp3";
  title = "X ft Future";
  author = "21 Savage & Metro Boomin";
 } 
  
  else if (musicId == 32) {
  document.getElementById('musicNum').src = link + "Break In!.mp3";
  title = "Break In!";
  author = "DarkHeart527 & Loafy";
 } 
 
  else if (musicId == 33) {
  document.getElementById('musicNum').src = link + "Denzel Curry - Ultimate.mp3";
  title = "Ultimate";
  author = "Denzel Curry";
 } 
 
   else if (musicId == 34) {
  document.getElementById('musicNum').src = link + "21 Savage - Dip Dip.mp3";
  title = "Dip Dip";
  author = "21 Savage";
 } 

   else if (musicId == 35) {
  document.getElementById('musicNum').src = link + "21 Savage - Red Opps.mp3";
  title = "Red Opps";
  author = "21 Savage";
 } 
 
   else if (musicId == 36) {
  document.getElementById('musicNum').src = link + "21 Savage & Metro Boomin - No Heart.mp3";
  title = "No Heart";
  author = "21 Savage & Metro Boomin";
 } 
 
   else if (musicId == 37) {
  document.getElementById('musicNum').src = link + "Lil Yachty - 1Night.mp3";
  title = "1Night";
  author = "Lil Yachty";
 } 
 
   else if (musicId == 38) {
  document.getElementById('musicNum').src = link + "Kodak Black, 21 Savage, Lil Uzi Vert, Lil Yachty & Denzel Curry's 2016 XXL Freshmen Cypher.mp3";
  title = "2016 XXL Freshmen Cypher";
  author = "Kodak Black, 21 Savage, Lil Uzi Vert, Lil Yachty & Denzel Curry";
 }  
   else if (musicId == 39) {
  document.getElementById('musicNum').src = link + "ScHoolboy Q - THat Part ft. Kanye West.mp3";
  title = "THat Part ft. Kanye West";
  author = "ScHoolboy Q";
 } 
 
   else if (musicId == 40) {
  document.getElementById('musicNum').src = link + "Young M.A Ft. 50 Cent - OOOUUU (Remix).mp3";
  title = "OOOUUU (Remix) ft. 50 cent";
  author = "Young M.A.";
 } 
 
   else if (musicId == 41) {
  document.getElementById('musicNum').src = link + "Lil Yachty x 21 Savage - Guap.mp3";
  title = "Guap";
  author = "Lil Yachty & 21 Savage";
 } 
 
   else if (musicId == 42) {
  document.getElementById('musicNum').src = link + "Creepy Clowns Diss Track-Ricegum.mp3";
  title = "Creepy Clowns Diss Track";
  author = "Ricegum";
 } 
 
   else if (musicId == 43) {
  document.getElementById('musicNum').src = link + "Drake - Energy.mp3";
  title = "Energy";
  author = "Drake";
 } 
 
   else if (musicId == 44) {
  document.getElementById('musicNum').src = link + "No Flockin.mp3";
  title = "No Flockin";
  author = "Kodak Black";
 } 
 
   else if (musicId == 45) {
  document.getElementById('musicNum').src = link + "Lost Boi Redemption.mp3";
  title = "Lost Boi Redemption";
  author = "DJ O.T.C";
 } 
 
   else if (musicId == 46) {
  document.getElementById('musicNum').src = link + "Hollyhood - Kodak Black.mp3";
  title = "Hollyhood";
  author = "Kodak Black";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
  else {
  checkForMusic();
 } 
 document.getElementById('musicNum').onloadeddata = function() {
 document.getElementById('progressTime').max = Number(Math.floor(document.getElementById('musicNum').duration) * 50);
 }
}

function checkForMusic() {
 randomize();
 if (document.getElementById('type').value == "pocketband") {
  musicId = 'pb' + random;
  checkPb();
 } else if (document.getElementById('type').value == "isaiahsPlaylist") {
  musicId = 'iP' + random2;
  checkiP();
 } else if (document.getElementById('type').value == "author_Drake") {
  musicId = 'authDrake' + random3;
  auth_drake();
 } else if (document.getElementById('type').value == "author_21Savage") {
  musicId = 'auth21Savage' + random4;
  auth_21Savage();
 } else {
  change0();
  checkAndPlay();
 }
}

function checkPb() {
 if (musicId == "pb1") {
  musicId = 1;
 } else if (musicId ==  "pb2") {
  musicId = 3;
 } else if (musicId == "pb3") {
  musicId = 4;
 } else if (musicId == "pb4") {
  musicId = 7;
 } else if (musicId == "pb5") {
  musicId = 32;
 } else if (musicId == "pb6") {
  musicId = 18;
 } else if (musicId == "pb7") {
  musicId = 19;
 } else if (musicId == "pb8") {
  musicId = 20;
 } else if (musicId == "pb9") {
  musicId = 21;
 } else if (musicId == "pb10") {
  musicId = 22;
 } else if (musicId == "pb11") {
  musicId = 23;
 } else if (musicId == "pb12") {
  musicId = 25;
 } else if (musicId == "pb13") {
  musicId = 27;
 } else if (musicId == "pb14") {
  musicId = 28;
 } else if (musicId == "pb15") {
  musicId = 29;
 } else if (musicId == "pb16") {
  musicId = 30;
 }
 checkAndPlay();
}

function checkiP() {
 if (musicId == "iP1") {
  musicId = 33;
 } else if (musicId == "iP2") {
  musicId = 31;
 } else if (musicId == "iP3") {
  musicId = 26;	 
 } else if (musicId == "iP4") {
  musicId = 34;
 } else if (musicId == "iP5") {
  musicId = 35;
 } else if (musicId == "iP6") {
  musicId = 36;	 
 } else if (musicId == "iP7") {
  musicId = 37;
 } else if (musicId == "iP8") {
  musicId = 38;
 } else if (musicId == "iP9") {
  musicId = 39;	 
 } else if (musicId == "iP10") {
  musicId = 40;
 } else if (musicId == "iP11") {
  musicId = 41;
 } else if (musicId == "iP12") {
  musicId = 42;
 } else if (musicId == "iP13") {
  musicId = 43;
 } else if (musicId == "iP14") {
  musicId = 46;
 } else if (musicId == "iP15") {
  musicId = 44;
 }
 checkAndPlay();
}

function auth_drake() {
 if (musicId == "authDrake1") {
  musicId = 26;
 } else if (musicId == "authDrake2") {
  musicId = 43;
 } 
 checkAndPlay();
}

function auth_21Savage() {
 if (musicId == "auth21Savage1") {
  musicId = 35;
 } else if (musicId == "auth21Savage2") {
  musicId = 36;
 } else if (musicId == "auth21Savage3") {
  musicId = 38;
 } else if (musicId == "auth21Savage4") {
  musicId = 34;
 } else if (musicId == "auth21Savage5") {
  musicId = 41;
 }
 checkAndPlay();
}

function randomize() {
 random = Math.floor(Math.random() * 16 + 1);
 random2 = Math.floor(Math.random() * 15 + 1);
 random3 = Math.floor(Math.random() * 2 + 1);
 random4 = Math.floor(Math.random() * 5 + 1);
}

function colorChanger() {
tran = "transition: 3s;";
if (document.getElementById('styleInput').value == "None") {
 document.getElementById('info').style = '';
} else {
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px blue;" + tran; }, 0);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px red;" + tran; }, 2000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px yellow;" + tran; }, 4000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px purple;" + tran; }, 6000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px green;" + tran; }, 8000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px pink;" + tran; }, 10000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px white;" + tran; }, 12000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px #2cb200;" + tran; }, 14000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px orange;" + tran; }, 16000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px gold;" + tran; }, 18000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px lightblue;" + tran; }, 20000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px red;" + tran; }, 22000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px silver;" + tran; }, 24000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px #df00ff;" + tran; }, 26000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px #00ff85;" + tran; }, 28000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px #ff003f;" + tran; }, 30000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px #4a148c;" + tran; }, 32000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px white;" + tran; }, 34000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px yellow;" + tran; }, 36000);
 setTimeout( function() { document.getElementById('info').style = "box-shadow: 0px 0px 20px orange;" + tran; }, 38000);
 setTimeout( function() { colorChanger(); }, 40000);
 }
}

function changeType() {
 if (document.getElementById('type2').value == "playlist") {
  document.getElementById('type').innerHTML = 
  '<option value="pocketband">Pocket Band</option>' +
  '<option value="isaiahsPlaylist">The Remix&#39;s Playlist</option>';  
 } 
 
 else if (document.getElementById('type2').value == "author") {
  document.getElementById('type').innerHTML =
  '<option value="author_Drake">Drake</option>' +
  '<option value="author_21Savage">21 Savage</option>';
 } 
 
 else if (document.getElementById('type2').value == "all") {
  document.getElementById('type').innerHTML = '<option class="option" value="all" selected>All</option>';
 }
}
