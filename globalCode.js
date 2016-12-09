var carryOutGC;
var checkGC;

function askForPerm() {
 if (localStorage.New == 1) {
  
 } else {
  var globalCode = prompt("Please Type In Your Seven Digit Global Code To Login... Ex: 1234567\n" + 'If you don' + "'" + 't have a GC then type "Guest"',"");
  if (globalCode == "Guest") {
   localStorage.setItem("login", "guest");
   localStorage.permissionLevel = 1;
   checkPermission();
  } else {
   checkCode();
   carryOutGC = globalCode;
  }
 }
}

function checkCode() {
 localStorage.setItem("login", carryOutGC);
 checkGC = carryOutGC;
 if (checkGC == 4278928) {
  localStorage.permissionLevel = 10;
 } else {
  error();
 }
}

function checkPermission() {
 if (localStorage.permissionLevel == 1 || localStorage.permissionLevel == 2) {
  if (document.getElementById('whatPage').value == "home") {
   setPageOne();
  }
 } else if (localStorage.permissionLevel == 10) {
  setPageTwo();
 }
}
