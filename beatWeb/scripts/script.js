var live = false;

if (live) {
	setTimeout( function() {location = location;}, 50);
}


function activateFrame(src, on) {
 if (on) {
  document.getElementById('seeFrame').src = src;
  document.getElementById('seeFrame').style.display = 'block';
 } else {
  document.getElementById('seeFrame').style.display = 'none';
 }
}
for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
  if (document.getElementsByTagName('img')[i].id != 'playPause') {
  document.getElementsByTagName('img')[i].style = "cursor: pointer;"
  document.getElementsByTagName('img')[i].onmouseover = function() {
  var a = document.getElementsByTagName('img')[i].src;
  var b = a.split('/');
  var c = b.length;
  activateFrame('picDisplay.html#' + b[c - 1], true);
 }
  document.getElementsByTagName('img')[i].onmouseout = function() {
  activateFrame('', false);
 }
  document.getElementsByTagName('img')[i].onmousemove = function() {
  document.getElementById('seeFrame').style.top = (event.clientY + 15) + "px";
  document.getElementById('seeFrame').style.left = (event.clientX + 15) + "px";
 }
  } else {
  }
}

document.getElementById('playPause').style.cursor = "pointer";
document.getElementById('playPause').onclick = function() {
	if (this.attributes.playing == true) {
		this.attributes.playing = false;
		this.src = 'pics/play.png';
	} else {
		this.attributes.playing = true;
		this.src = 'pics/stop.png';
	}
}