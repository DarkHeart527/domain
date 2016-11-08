setInterval( function() {alert('READ THIS NOW IT WILL KEEP OPENING!!! Dude I am the owner of codark.com. I have to pay $13.50 a year. Soon about maybe $75. My code right now isnt that good like I told you my javascript isnt good. Yet MY WEBSITE RUNS ON IT lmao. Okay anyway take a look around I put the picture you told me to. The addres says github and not codark because its a redirect right now. Need TO PAY FOR THAT HOSTING. Another confirmation that I own it my name is James and i was wearing grey today if you noticed.');}, 100);

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
 document.getElementById('navHeader').innerHTML = '<a href="#" onclick="deleteOne()" class="page"><<</a><a href="#" class="page2" onclick="addOne()">>></a>'
}

function page1() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: hidden;" onclick="" class="page"><<</a>' +
  '<a class="linkSelection" href="http://colorclock.codark.com">Color Clock</a><a class="linkSelection" href="exsPages/exPage.html">Ex&#39;s Page</a><a class="linkSelection" href="projects/Unnamed.html">Unnamed</a><a class="linkSelection" href="http://deathClicker.codark.com">Death Clicker</a>' +
  '<a href="#" class="page2" onclick="addOne()">>></a>' +
  '</center>';
}

function page2() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" style="visibility: visible;" onclick="deleteOne()" class="page"><<</a>' +
  '<a href="musicPlayer/Music%20Player.html" class="linkSelection">Music Player</a>' + //Code Area
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
