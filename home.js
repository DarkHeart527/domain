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
  '<a class="linkSelection" href="http://colorclock.codark.com">Color Clock</a>' +
  '<a class="linkSelection" href="convert/start.html">Converter</a>' +
  '<a class="linkSelection" href="projects/Unnamed.html">Unnamed</a>' +
  '<a class="linkSelection" href="http://deathClicker.codark.com">Death Clicker</a>' +
  '<a class="linkSelection" href="allowance/home.html">Allowance</a>' +
  '<a href="#" class="page2" onclick="addOne()">>></a>' +
  '</center>';
}

function page2() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: visible;" onclick="deleteOne()" class="page"><<</a>' +
  '<a href="musicPlayer/Music%20Player.html" class="linkSelection">Music Player</a>' +
  '<a href="iFrameVisitor/start.html" class="linkSelection">iFrame Visitor</a>' +
  '<a href="theRemix/home.html" class="linkSelection">The Remix</a>' +
  '<a href="#" class="page2" onclick="addOne()">>></a>' +
  '</center>';
}

function page3() {
  document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: visible;" onclick="deleteOne()" class="page"><<</a>' +
  '<a href="" class="linkSelection"></a>' + //Code Area
  '<a href="#" class="page2" onclick="addOne()">>></a>' +
  '</center>';
}
