var musicId = null;
var docId = document.getElementById;
var author = "";
var title = "";
var link = "music/";
var change = '';
var random = null;
var random2 = null;
var timeDisplay = "0:00:00";
var minutes = 0;
var hours = 0;
var minuteChecker = 0;
var secondChecker = 0;
timeAudio = null;
var afterVolume = 0;
var checkIfDisable = null;

var mId = {
 0: '<option class="option" value="0" selected>Random</option>',
 1: '<option class="option" value="1">Cut Throat</option>',
 2: '<option class="option" value="2">Contrast</option>',
 3: '<option class="option" value="3">Trap Challenge</option>',
 4: '<option class="option" value="4">TrapShitFreeBeat2</option>',
 5: '<option class="option" value="5">Gladius</option>',
 6: '<option class="option" value="6">Samurai</option>',
 7: '<option class="option" value="7">THE TRAPPER</option>',
 8: '<option class="option" value="8">T.H.O.T. (Clarice Diss)</option>',
 9: '<option class="option" value="9">Chiraq Instrumental</option>',
 10: '<option class="option" value="10">Skrilla Instrumental</option>',
 11: '<option class="option" value="11">Killa</option>',
 12: '<option class="option" value="12">Saintz</option>',
 13: '<option class="option" value="13">Beast</option>',
 14: '<option class="option" value="14">FRNDZN</option>',
 15: '<option class="option" value="15">10 Bands</option>',
 16: '<option class="option" value="16">TWITCH</option>',
 17: '<option class="option" value="17">Picky</option>',
 18: '<option class="option" value="18">Adding Fuel To Fire</option>',
 19: '<option class="option" value="19">Thanatus</option>',
 20: '<option class="option" value="20">1. Exordium</option>',
 21: '<option class="option" value="21">Angels And Demons,</option>',
 22: '<option class="option" value="22">ATL Yuletide</option>',
 23: '<option class="option" value="23">Dark Night,</option>',
 24: '<option class="option" value="24">Bad Karma</option>',
 25: '<option class="option" value="25">Plastik</option>',
 26: '<option class="option" value="26">Headlines</option>',
 27: '<option class="option" value="27">She Tatted Up</option>',
 28: '<option class="option" value="28">eXtincTioN Prophe(Y</option>',
 29: '<option class="option" value="29">Viaje.profundo</option>',
 30: '<option class="option" value="30">Love&hustle.</option>',
 31: '<option class="option" value="31">X ft Future</option>',
 32: '<option class="option" value="32">Break In!</option>',
 33: '<option class="option" value="33">Denzel Curry - Ultimate</option>',
 34: '<option class="option" value="34">Dip Dip</option>',
 35: '<option class="option" value="35">Red Opps</option>',
 36: '<option class="option" value="36">No Heart</option>',
 37: '<option class="option" value="37">1Night</option>',
 38: '<option class="option" value="38">2016 XXL Freshmen Cypher</option>',
 39: '<option class="option" value="39">THat Part ft. Kanye West</option>',
 40: '<option class="option" value="40"></option>',
 41: '<option class="option" value="41"></option>',
 42: '<option class="option" value="42">NONE</option>',
 43: '<option class="option" value="43">NONE</option>',
 44: '<option class="option" value="44">NONE</option>',
 45: '<option class="option" value="45">NONE</option>',
 46: '<option class="option" value="46">NONE</option>',
 47: '<option class="option" value="47">NONE</option>',
 48: '<option class="option" value="48">NONE</option>',
 49: '<option class="option" value="49">NONE</option>',
 50: '<option class="option" value="50">NONE</option>',
 51: '<option class="option" value="51">NONE</option>',
 52: '<option class="option" value="52">NONE</option>',
 53: '<option class="option" value="53">NONE</option>',
 54: '<option class="option" value="54">NONE</option>',
 55: '<option class="option" value="55">NONE</option>',
 }


function change0() {
 musicId = Math.floor( Math.random() * 39 + 1);
}

function autoUpdater() {

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
  }
 } else if (document.getElementById('musicNum').ended == false) {
  
 }
}

function canWait() {
   document.getElementById('title').innerHTML = title;
   document.getElementById('author').innerHTML = author;
   document.getElementById('progressTime').value = document.getElementById('musicNum').currentTime;
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
 change0();
 checkAndPlay();
 setInterval( function() { autoUpdater(); }, 50);
 setInterval( function() { canWait(); }, 500);
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
  author = "Drake";
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
 
 /*-------------------------------------------------------------------------------------------------------------*/  

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
 
   else if (musicId == NaN) {
  document.getElementById('musicNum').src = link + "";
  title = "";
  author = "";
 } 
 
  else {
  if (document.getElementById('type').value == "pocketband") {
   randomize();
   musicId = 'pb' + random;
   checkPb();
  } else if (document.getElementById('type').value == "isaiahsPlaylist") {
   randomize();
   musicId = 'iP' + random2;
   checkiP();
  } else {
   change0();
   checkAndPlay();
 }
 } 
 document.getElementById('musicNum').onloadeddata = function() {
 document.getElementById('progressTime').max = Number(Math.floor(document.getElementById('musicNum').duration));
 }
}

function checkType() {
 if (document.getElementById('type').value == "all") {
  changeToAll();
 } else if (document.getElementById('type').value == "artist") {
  changeToArtist();
 }
}

function changeSongs() {
if (document.getElementById('type').value == "all") {
 document.getElementById('selector').innerHTML = 
		    mId[0] +
		    mId[1] +
			mId[2] +
			mId[3] +
			mId[4] +
			mId[5] +
			mId[6] +
			mId[7] +
			mId[8] +
			mId[9] +
			mId[10] +
			mId[11] +
			mId[12] +
			mId[13] +
			mId[14] +
			mId[15] +
			mId[16] +
			mId[17] +
			mId[18] +
			mId[19] +
			mId[20] +
			mId[21] +
			mId[22] +
			mId[23] +
			mId[24] +
			mId[25] +
			mId[26] +
			mId[27] +
			mId[28] +
			mId[29] +
			mId[30] +
			mId[31] +
			mId[32] +
			mId[33] +
			mId[34] +
			mId[35] +
			mId[36] +
			mId[37] +
			mId[38] +
			mId[39] +
			mId[40] +
			mId[41] +
			mId[42] +
			mId[43] +
			mId[44] +
			mId[45] +
			mId[46] +
			mId[47] +
			mId[48] +
			mId[49] +
			mId[50] +
			mId[51] +
			mId[52] +
			mId[53] +
			mId[54] +
			mId[55];
			}
	else if (document.getElementById('type').value == "pocketband") {
	 document.getElementById('selector').innerHTML = 		    
			mId[0] +
		    mId[1] +
			mId[3] +
			mId[4] +
			mId[7] +
			mId[18] +
			mId[19] +
			mId[20] +
			mId[21] +
			mId[22] +
			mId[23] +
			mId[25] +
			mId[27] +
			mId[28] +
			mId[29] +
			mId[30] +
			mId[32];
	} 
	else if (document.getElementById('type').value == "isaiahsPlaylist") {
	document.getElementById('selector').innerHTML = 
			mId[0] +
			mId[33] +
			mId[31] +
			mId[26] +
			mId[34] +
			mId[35] +
			mId[36] +
			mId[37] +
			mId[38] +
			mId[39] +
			mId[40] +
			mId[41];
		 }
}

function songPlayChecker() {
 if (document.getElementById('type').value == "pocketband") {
 PocketBand();
 } else if (document.getElementById('type').value == "isaiahsPlaylist") {
  isaiahsPlaylist();	 
 }
}

function PocketBand() {
  randomize();
  musicId = 'pb' + random;
  checkPb();
}

function isaiahsPlaylist() {
 randomize();
 musicId = 'iP' + random2;
 checkiP();
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
 }
 checkAndPlay();
}

function randomize() {
 random = Math.floor(Math.random() * 16 + 1);
 random2 = Math.floor(Math.random() * 9 + 1);
}

function colorChanger() {
tran = "transition: 3s;";
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
