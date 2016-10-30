var pageNum = 1;

function checkNav() {
 if (pageNum == 1) {
  page1();
 }
 else if (pageNum == 2) {
  page2();
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
 document.getElementById('navHeader').innerHTML = '<a href="#" onclick="deleteOne()" class="page"><<</a><a href="#" class="page2" onclick="addOne()">>></a>'
}

function page1() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: hidden;" onclick="" class="page"><<</a>' +
  '<a class="linkSelection" href="http://colorclock.codark.com">Color Clock</a><a class="linkSelection" href="http://girlfriend.codark.com">Ex&#39;s Page</a><a class="linkSelection" href="http://projects.codark.com">Projects</a><a class="linkSelection" href="http://deathClicker.codark.com">Death Clicker</a>' +
  '<a href="#" class="page2" onclick="addOne()">>></a>' +
  '</center>';
}

function page2() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: visible;" onclick="deleteOne()" class="page"><<</a>' +
  '<a href="http://allowance.codark.com" class="linkSelection">Allowance Saver</a><a href="http://musicplayer.codark.com" class="linkSelection">Music Player</a>' + //Code Area
  '<a href="#" class="page2" onclick="addOne()">>></a>' +
  '</center>';
}
