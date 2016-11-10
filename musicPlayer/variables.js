var musicId = null;
var author = null;
var title = null;
var link = "music/";
var change = '';
var random = null;
var random2 = null;
var timeDisplay = null;
var minutes = 0;
var hours = 0;
var minuteChecker = 0;
var secondChecker = 0;
var timeAudio = null;
var afterVolume = 0;
var checkIfDisable = null;
var saveLast = '';
var fS = 1;
var adTimeLeft = 10;
var adTimeKeeper = 30;
var mId = {
  0: '<option class="option" title="All Songs" 															value="0" selected>Random</option>',
  1: '<option class="option" title="Iwey" 																value="1">Cut Throat</option>',
  2: '<option class="option" title="Trap Nation & Jordan Comolli" 										value="2">Contrast</option>',
  3: '<option class="option" title="Lyric 313" 															value="3">Trap Challenge</option>',
  4: '<option class="option" title="SYNIK" 																value="4">TrapShitFreeBeat2</option>',
  5: '<option class="option" title="Trap Nation & KXA" 													value="5">Gladius</option>',
  6: '<option class="option" title="Trap Nation & Lookas" 												value="6">Samurai</option>',
  7: '<option class="option" title="KINGDEE" 															value="7">THE TRAPPER</option>',
  8: '<option class="option" title="The Remix ft. The Game" 											value="8">T.H.O.T. (Clarice Diss)</option>',
  9: '<option class="option" title="" 																	value="9">Chiraq Instrumental</option>',
 10: '<option class="option" title="Kodak Black" 														value="10">Skrilla Instrumental</option>',
 11: '<option class="option" title="DISTO" 																value="11">Killa</option>',
 12: '<option class="option" title="NextRo" 															value="12">Saintz</option>',
 13: '<option class="option" title="Onderkoffer" 														value="13">Beast</option>',
 14: '<option class="option" title="Onderkoffer" 														value="14">FRNDZN</option>',
 15: '<option class="option" title="Drake"		 														value="15">10 Bands</option>',
 16: '<option class="option" title="LAXX" 																value="16">TWITCH</option>',
 17: '<option class="option" title="21 Savage"															value="17">Picky</option>',
 18: '<option class="option" title="Riskit" 															value="18">Adding Fuel To Fire</option>',
 19: '<option class="option" title="The Imp" 															value="19">Thanatus</option>',
 20: '<option class="option" title="Accept17" 															value="20">1. Exordium</option>',
 21: '<option class="option" title="TripleMT"	 														value="21">Angels And Demons,</option>',
 22: '<option class="option" title="cjnoll" 															value="22">ATL Yuletide</option>',
 23: '<option class="option" title="TripleMT" 															value="23">Dark Night,</option>',
 24: '<option class="option" title="Axel Thesleff & Trap Nation"										value="24">Bad Karma</option>',
 25: '<option class="option" title="Jed*" 																value="25">Plastik</option>',
 26: '<option class="option" title="Drake"     															value="26">Headlines</option>',
 27: '<option class="option" title="Synikal Beatz" 		   												value="27">She Tatted Up</option>',
 28: '<option class="option" title="Lex Kegger"		   													value="28">eXtincTioN Prophe(Y</option>',
 29: '<option class="option" title="lokosDj" 		   													value="29">Viaje.profundo</option>',
 30: '<option class="option" title="BeatzByLeepz"          												value="30">Love&hustle.</option>',
 31: '<option class="option" title="21 Savage & Metro Boomin"         		 							value="31">X ft Future</option>',
 32: '<option class="option" title="DarkHeart527 & Loafy"      											value="32">Break In!</option>',
 33: '<option class="option" title="Denzel Curry" 			 											value="33">Ultimate</option>',
 34: '<option class="option" title="21 Savage" 															value="34">Dip Dip</option>',
 35: '<option class="option" title="21 Savage" 															value="35">Red Opps</option>',
 36: '<option class="option" title="21 Savage & Metro Boomin"   										value="36">No Heart</option>',
 37: '<option class="option" title="Lil Yachty" 														value="37">1Night</option>',
 38: '<option class="option" title="Kodak Black, 21 Savage, Lil Uzi Vert, Lil Yachty & Denzel Curry" 	value="38">2016 XXL Freshmen Cypher</option>',
 39: '<option class="option" title="ScHoolboy Q" 		   												value="39">THat Part ft. Kanye West</option>',
 40: '<option class="option" title="Young M.A." 														value="40">OOOUUU (Remix)</option>',
 41: '<option class="option" title="Lil Yachty & 21 Savage" 											value="41">Guap</option>',
 42: '<option class="option" title="Ricegum"				    										value="42">Creepy Clowns Diss Track</option>',
 43: '<option class="option" title="Drake" 																value="43">Energy</option>',
 44: '<option class="option" title="Kodak Black" 														value="44">No Flockin</option>',
 45: '<option class="option" title="DJ O.T.C" 															value="45">Lost Boi Redemption</option>',
 46: '<option class="option" title="Kodak Black" 														value="46">Hollyhood</option>',
 47: '<option class="option" title="" 																	value="47"></option>',
 48: '<option class="option" title="" 																	value="48"></option>',
 49: '<option class="option" title="" 																	value="49"></option>',
 50: '<option class="option" title="" 																	value="50"></option>',
 51: '<option class="option" title="" 																	value="51"></option>',
 52: '<option class="option" title="" 																	value="52"></option>',
 53: '<option class="option" title="" 																	value="53"></option>',
 54: '<option class="option" title="" 																	value="54"></option>',
 55: '<option class="option" title="" 																	value="55"></option>',
 }