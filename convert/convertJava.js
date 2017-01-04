function makeUrl() {
 document.getElementById('fFile').innerHTML = '<input type="url" id="urlT">';
 document.getElementById('dRC').innerHTML = '<a onmouseover="uUrl()" id="urlA" href="" download>Download</a>';
}

function mpCutI() {
 //document.getElementById('display').innerHTML = '<iframe src="https://mp3cut.net/swf/mp3cut.swf" height="100%" width="100%">Browser Not Supported</iframe><br /><p href="http://mp3cut.net/">Mp3 Conversion By <a href="http://mp3cut.net/swf/mp3cut.swf">mp3cut.net</a></p><br /><p>Not a fan of your website in my iFrames?<br />Email Me At darkheart527s@gmail.com with proof of ownership</p>';
}

function uUrl() {
 document.getElementById('urlA').href = document.getElementById('urlT').value;
}
