function getId(value) {
	return document.getElementById(value);
}

function getFirstClass(value) {
	return document.getElementsByClassName(value)[0];
}

function getBody() {
	return document.getElementsByTagName('body')[0];
}

function getHtml() {
	return document.getElementsByTagName('html')[0]
}

function getFirstTag(value) {
	return document.getElementsByTagName(value)[0];
}

function getTags(value) {
	document.getElementsByTagName(value);
}

function getClasses(value) {
	return document.getElementsByClassName(value);
}

function addInt(value) {
	return console.info("This Is In Progress");
}

function removeInt(value) {
	return console.info("This Is In Progress");
}

function getTime() {
	return console.info("This Is In Progress");
}

function getDate() {
	return console.info("This Is In Progress");
}

function getProgress(current, target) {
	return Number(current / target)
}

function error(value) {
	return console.error(value);
}

function info(value) {
	return console.info(value);
}

function log(value) {
	return console.log(value);
}

function debug(value) {
	console.log(debug);
}

function lowercase(value) {
	return value.toLowerCase();
}

function uppercase(value) {
	return value.toUpperCase();
}
consoleclear = true;
if (consoleclear == undefined | consoleclear == null | consoleclear == NaN) {
	consoleclear = false;	
}

if (consoleclear == false) {
	console.clear = function() {clear();};
	function clear() {
		error("You Can't Clear The Console!")
	}
} else {
	console.info("Console Clearing Is Allowed");
	function clear() {
		console.clear();
	}
}


function warn(value) {
	console.warn(value);
}

function newElement(value) {
	return document.createElement(value);
}

function checkUpdate() {
 a = newElement('iframe');
 document.appendChild(a)
 a.src = 'https://darkheart527.github.io/domain/simpleScript/simpleScriptUpdate.html'
 a.style.width = '100%'
 a.style.height = '100%'
 a.style = 'position:absolute;top: 0px; left: 0px;'
 log.info('Update Checked - Page Modified And Showed')
}
