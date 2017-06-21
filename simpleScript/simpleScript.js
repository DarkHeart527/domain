/*

*/

var log = {
 error: function(info) {
  console.error(info)
 }
}

function newElement(info) {
 document.createElement(info)
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
  log.error('Couldn\'t find selected elements');
 }
}

function getFirstElement(info) {
 return document.getElementById(info);
}

function checkUpdate() {
 a = newElement('iframe')
 a.src = 'https://darkheart527.github.io/domain/simpleScript/simpleScriptUpdate.html'
 a.style.width = '100%'
 a.style.height = '100%'
 a.style = 'position:absolute;top: 0px; left: 0px;'
 log.info('Update Checked - Page Modified And Showed')
}
