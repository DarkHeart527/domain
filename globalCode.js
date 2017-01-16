var carryOutGC;
var checkGC;
onLoaded();

function onLoaded() {
 if (localStorage.New == 1) {
  checkGC = localStorage.getItem("login");
  carryOutGc = localStorage.getItem("login");
  setTimeout( function() { askForPermNoAsk();signedIn(); }, 250);
 }
}

function askForPerm() {
 if (localStorage.New == 1) {
  checkGC = localStorage.getItem("login");
  askForPermNoAsk();
 } else {
  var globalCode = prompt("Please Type In Your Seven Digit Global Code To Login... Ex: 1234567\n" + 'If you don' + "'" + 't have a GC then type "Guest"',"");
  if (globalCode == "Guest") {
   localStorage.setItem("login", "Guest");
   localStorage.permissionLevel = 1;
   checkPermission();
  } else {
   carryOutGC = globalCode;
   checkCode();
  }
 }
}

function signedIn() {
 if (document.getElementById('whatPage').value == 1) {
 document.getElementById('signIn').style = 'visibility: hidden';
 document.getElementById('signOut').style = 'visibility: visible';
 } else {
 }
}

function askForPermNoAsk() {
 if (checkGC == "Guest") {
   localStorage.setItem("login", "Guest");
   localStorage.permissionLevel = 1;
   checkPermission();
  } else {
   checkCode()
  }
}

function checkCode() {
 localStorage.setItem("login", carryOutGC);
 checkGC = carryOutGC;
 if (checkGC == 4278928) {
  localStorage.permissionLevel = 10;
  checkPermission();
 } else if (checkGC == "Guest") {
 } else {
  error();
 }
}

function logOut() {
 localStorage.New = 0;
 localStorage.setItem("login", "");
 localStorage.permissionLevel = 1;
 localStorage.savedGc = "";
 setTimeout(function() { location = location }, 100);
}

function error() {
 globalCode = prompt("Error: Invalid GC!!!\nPlease Type In Your Seven Digit Global Code To Login... Ex: 1234567\n" + 'If you don' + "'" + 't have a GC then type "Guest"',"");
 if (globalCode == "Guest") {
   localStorage.setItem("login", "Guest");
   localStorage.permissionLevel = 1;
   checkPermission();
  } else {
   carryOutGC = globalCode;
   checkCode();
  }
}

function checkPermission() {
 if (document.getElementById('whatPage').value == 1) {
 document.getElementById('signIn').style = 'visibility: hidden';
 document.getElementById('signOut').style = 'visibility: visible';
 } else {
 }
 localStorage.savedGc = checkGC;
 if (localStorage.permissionLevel == 1) {
  if (document.getElementById('whatPage').value == 1) {
   setPageOne();
  }
 } else if (localStorage.permissionLevel == 10) {
  setPageTen();
 }
localStorage.New = 1;
}

function setPageOne() {
 if (document.getElementById('link3')) {
  document.getElementById('link3').remove()
 }
}

function setPageTen() {
 document.getElementById('3').href = "projects/Unnamed.html";
}
