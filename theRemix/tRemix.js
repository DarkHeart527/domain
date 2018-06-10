var theRemix = {
	load: function(a) {
	 setInterval( function(){document.body.style.fontSize=window.innerWidth+"px"}, 10)
	 document.getElementsByClassName('header')[0].innerHTML = 
	 '<span class="header2">The Remix<span class="headerSub2">Better Than Fire</span></span>' + //The Name
	 '<span class="headLink" onclick="theRemix.openPage(\'homePage\')">Home</span>' + //Home Page
	 '<span class="headLink" onclick="theRemix.openPage(\'musicPage\')">Music</span>' + //Music Page
	 '<span class="headLink" onclick="theRemix.openPage(\'settingsPage\')">Settings</span>' //Settings Page
	 document.getElementById('pausePlay').onclick = function() {
	  if (this.attributes.paused.value == 'true') { // If the player is paused (not playing)
	    if (document.getElementById('audio').src == 'file:///C:/Users/darkh/Desktop/theRemix/start.html') {
		 document.getElementById('audio').src = 'music/Right Now.mp3';
		 document.getElementsByTagName('a')[0].href = document.getElementById('audio').src;
		}
	    document.getElementById('audio').play();
	    this.attributes.paused.value = 'false';
		this.src = 'images/stop.png';
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
	    document.getElementsByTagName('a')[0].href = document.getElementById('audio').src;
		document.getElementById('pausePlay').src = 'images/stop.png';
		document.getElementById('pausePlay').attributes.paused.value = 'false';
	   }
	   document.getElementById('trackNumber').innerHTML = i + 1;
	  }
	},
	openPage: function(page) {
	 for (i = 0; i < document.getElementsByClassName('pages').length; i++) {
	  document.getElementsByClassName('pages')[i].style = "visibility: hidden;"
	 }
	 if (page == 'musicPage') {
      document.body.style = "overflow-x: hidden"
	 } else {
	  document.body.style = "overflow: hidden"
	 }
	 document.getElementById(page).style = "visibility: visible";
	},
}
