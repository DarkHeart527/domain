
var theRemix = {
	load: function(a) {
	 setInterval( function(){document.body.style.fontSize=window.innerWidth+"px"}, 10)
	 document.getElementsByClassName('header')[0].innerHTML = 
	 '<span class="header2">The Remix<span class="headerSub2">Better Than Fire</span></span>' + //The Name
	 '<a href="start.html">Home</a>' + //Home Page
	 '<a href="musicPage.html">Music</a>' + //Music Page
	 '<a href="settingsPage.html">Settings</a>' //Settings Page
	 if (a == 2) {
	 document.getElementById('pausePlay').onclick = function() {
	  if (this.attributes.paused.value == 'true') { // If the player is paused (not playing)
	    this.attributes.paused.value = 'false';
		this.src = 'images/stop.png';
	    document.getElementById('audio').play();
	   } else { //If the player is not paused (playing)
	    this.attributes.paused.value = 'true';
		this.src = 'images/play.png';
	    document.getElementById('audio').pause();
	   }
	  }
	  for (i = 0; i < document.getElementsByClassName('track').length; i++) {
	   document.getElementsByClassName('track')[i].id = 'track#' + Number(i + 1);
	   document.getElementsByClassName('track')[i].onclick = function() {
	    document.getElementById('audio').src = 'music/' + this.attributes.url.value;
		document.getElementById('pausePlay').src = 'images/stop.png';
		document.getElementById('pausePlay').attributes.paused.value = 'false';
	   }
	   document.getElementById('trackNumber').innerHTML = i + 1;
	  }
	 }
	},
}
