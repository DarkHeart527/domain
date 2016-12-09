askForPerm();
var carryOutGC;
var checkGC;

function askForPerm() {
 if (localStorage.New == 1) {
  
 } else {
  var globalCode = prompt("Please Type In Your Seven Digit Global Code To Login... Ex: 1234567" + "<br />" + 'If you don' + "'" + 't have a GC then type "Guest"',"");
  if (globalCode == "Guest") {
   localStorage.setItem("login", "guest");
  } else {
   checkCode();
   carryOutGC = globalCode;
  }
 }
}

function checkCode() {
 localStorage.setItem("login", carryOutGC);
 checkGC = carryOutGC;
}
