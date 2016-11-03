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
  0: '<option class="option" title="All Songs" 					value="0" selected>Random</option>',
  1: '<option class="option" title="Iwey" 						value="1">Cut Throat</option>',
  2: '<option class="option" title="" 							value="2">Contrast</option>',
  3: '<option class="option" title="" 							value="3">Trap Challenge</option>',
  4: '<option class="option" title="" 							value="4">TrapShitFreeBeat2</option>',
  5: '<option class="option" title="" 							value="5">Gladius</option>',
  6: '<option class="option" title="" 							value="6">Samurai</option>',
  7: '<option class="option" title="" 							value="7">THE TRAPPER</option>',
  8: '<option class="option" title="The Remix" 					value="8">T.H.O.T. (Clarice Diss)</option>',
  9: '<option class="option" title="" 							value="9">Chiraq Instrumental</option>',
 10: '<option class="option" title="Kodak Black" 				value="10">Skrilla Instrumental</option>',
 11: '<option class="option" title="" 							value="11">Killa</option>',
 12: '<option class="option" title="" 							value="12">Saintz</option>',
 13: '<option class="option" title="" 							value="13">Beast</option>',
 14: '<option class="option" title="" 							value="14">FRNDZN</option>',
 15: '<option class="option" title="Drake" 						value="15">10 Bands</option>',
 16: '<option class="option" title="" 							value="16">TWITCH</option>',
 17: '<option class="option" title=""							value="17">Picky</option>',
 18: '<option class="option" title="Riskit0" 					value="18">Adding Fuel To Fire</option>',
 19: '<option class="option" title="" 							value="19">Thanatus</option>',
 20: '<option class="option" title="Accept17" 					value="20">1. Exordium</option>',
 21: '<option class="option" title="TripleMT" 					value="21">Angels And Demons,</option>',
 22: '<option class="option" title="cjnoll" 					value="22">ATL Yuletide</option>',
 23: '<option class="option" title="TripleMT" 					value="23">Dark Night,</option>',
 24: '<option class="option" title="Axel Thesleff & Trap Nation"value="24">Bad Karma</option>',
 25: '<option class="option" title="Jed*" 						value="25">Plastik</option>',
 26: '<option class="option" title="Drake"     					value="26">Headlines</option>',
 27: '<option class="option" title="" 		   					value="27">She Tatted Up</option>',
 28: '<option class="option" title=""		   					value="28">eXtincTioN Prophe(Y</option>',
 29: '<option class="option" title="" 		   					value="29">Viaje.profundo</option>',
 30: '<option class="option" title=""          					value="30">Love&hustle.</option>',
 31: '<option class="option" title=""         		 			value="31">X ft Future</option>',
 32: '<option class="option" title="DarkHeart527 & Loafy"       value="32">Break In!</option>',
 33: '<option class="option" title="Denzel Curry" 			 	value="33">Ultimate</option>',
 34: '<option class="option" title="21 Savage" 					value="34">Dip Dip</option>',
 35: '<option class="option" title="21 Savage" 					value="35">Red Opps</option>',
 36: '<option class="option" title="21 Savage & Metro Boomin"   value="36">No Heart</option>',
 37: '<option class="option" title="Lil Yachty" 				value="37">1Night</option>',
 38: '<option class="option" title="" 		   					value="38">2016 XXL Freshmen Cypher</option>',
 39: '<option class="option" title="" 		   					value="39">THat Part ft. Kanye West</option>',
 40: '<option class="option" title="" 							value="40">OOOUUU (Remix)</option>',
 41: '<option class="option" title="" 							value="41">Guap</option>',
 42: '<option class="option" title="Ricegum"				    value="42">Creepy Clowns Diss Track</option>',
 43: '<option class="option" title="Drake" 						value="43">Energy</option>',
 44: '<option class="option" title="" 							value="44"></option>',
 45: '<option class="option" title="" 							value="45"></option>',
 46: '<option class="option" title="" 							value="46"></option>',
 47: '<option class="option" title="" 							value="47"></option>',
 48: '<option class="option" title="" 							value="48"></option>',
 49: '<option class="option" title="" 							value="49"></option>',
 50: '<option class="option" title="" 							value="50"></option>',
 51: '<option class="option" title="" 							value="51"></option>',
 52: '<option class="option" title="" 							value="52"></option>',
 53: '<option class="option" title="" 							value="53"></option>',
 54: '<option class="option" title="" 							value="54"></option>',
 55: '<option class="option" title="" 							value="55"></option>',
 }


function change0() {
 musicId = Math.floor( Math.random() * 1000 + 1);
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
  } else if (document.getElementById('type').value == "author_Drake") {
   musicId = document.getElementById('selector').value;
   checkAndPlay();
  } else if (document.getElementById('type').value == "author_21Savage") {
   musicId = document.getElementById('selector').value;
   checkAndPlay();
  }
 } else if (document.getElementById('musicNum').ended == false) {
  
 }
}

function canWait() {
   document.getElementById('title').innerHTML = title;
   document.getElementById('author').innerHTML = author;
   setTimeout( function() { document.getElementById('progressTime').value = document.getElementById('musicNum').currentTime * 50; }, 1000);
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
 setInterval( function() { canWait(); });
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
 document.getElementById('musicNum').onloadeddata = function() {
 document.getElementById('progressTime').max = Number(Math.floor(document.getElementById('musicNum').duration) * 50);
 }
}

function songPlayChecker() {
 if (document.getElementById('type').value == "pocketband") {
 PocketBand();
 } else if (document.getElementById('type').value == "isaiahsPlaylist") {
  isaiahsPlaylist();	 
 } else if (document.getElementById('type').value == "author_Drake") {
  author_drakeRun();
 } else if (document.getElementById('type').value == "author_21Savage") {
  author_21savageRun();
 }
}

function PocketBand() {
  randomize();
  musicId = 'pb' + random;
  checkPb();
}

function author_drakeRun() {
  randomize();
  musicId = 'authDrake' + random3;
  auth_drake();
}

function author_21savageRun() {
  randomize();
  musicId = 'authSavage' + random4;
  auth_21Savage();
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
 }
 checkAndPlay();
}

function auth_drake() {
 if (musicId == "authDrake1") {
  musicId = 26;
 } else if (musicId == "authDrake2") {
  musicId = 43;
 } else if (musicId == "authDrake3") {
  musicId = 15;
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
 random2 = Math.floor(Math.random() * 13 + 1);
 random3 = Math.floor(Math.random() * 3 + 1);
 random4 = Math.floor(Math.random() * 4 + 1);
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
