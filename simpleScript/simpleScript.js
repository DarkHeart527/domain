/*

*/

var log = {
 error: function(info) {
 }
}

function getId(info) {
 return document.getElementById(info);	
}

function getClasses(info) {
 return document.getElementsByClassName(info);
}

function getFirstClass(info) {
 return document.getElementsByClassName(info)[0];
}

function getElements(info) {
 if (document.getElementsByTagName(info)) {
 return document.getElementsByTagName(info);
 } else {
  log.error(	 
 }
}
