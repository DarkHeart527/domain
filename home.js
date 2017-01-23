alert('The Home Screen Is Currently Being Remade/nPlease Be Aware That Some Errors Can And Will Exist')

var pageNum = 1;

function checkNav() {
 if (pageNum == 1) {
  page1();
 }
 else if (pageNum == 2) {
  page2();
 } else if (pageNum == 3) {
  page3();
 }
 else {
  pageEmpty();
 }
 document.getElementById('pageNum').innerHTML = pageNum;
}

function addOne() {
 pageNum = Number(pageNum + 1);
 checkNav();
}

function deleteOne() {
 pageNum = Number(pageNum - 1);
 checkNav();
}

function pageEmpty() {
 document.getElementById('navHeader').innerHTML = 
 '<a href="#" onclick="deleteOne()" class="page"><<</a>' +
 '<a href="#" class="page2" onclick="addOne()">>></a>';
}

function page1() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: hidden;" onclick="" class="page"><<</a>' +
  //'<a id="link1" class="linkSelection" href="http://colorclock.codark.com">Color Clock</a>' +
  '<a id="link2" class="linkSelection" href="convert/start.html">Converter</a>' +
  //'<a id="link3" class="linkSelection" href="projects/Unnamed.html">Unnamed</a>' +
  //'<a id="link4" class="linkSelection" href="http://deathClicker.codark.com">Death Clicker</a>' +
  //'<a id="link5" class="linkSelection" href="allowance/home.html">Allowance</a>' +
  '<a href="#" class="page2" onclick="addOne();checkPermission()">>></a>' +
  '</center>';
}

function page2() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: visible;" onclick="deleteOne();checkPermission()" class="page"><<</a>' +
  //'<a id="link6" href="musicPlayer/Music%20Player.html" class="linkSelection">Music Player</a>' +
  //'<a id="link7" href="iFrameVisitor/start.html" class="linkSelection">iFrame Visitor</a>' +
  //'<a id="link8" href="theRemix/home.html" class="linkSelection">The Remix</a>' +
  '<a href="#" class="page2" onclick="addOne();checkPermission()">>></a>' +
  '</center>';
}

function page3() {
  document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: visible;" onclick="deleteOne();checkPermission()" class="page"><<</a>' +
  '<a href="" class="linkSelection"></a>' + //Code Area
  '<a href="#" class="page2" onclick="addOne();checkPermission()">>></a>' +
  '</center>';
}
