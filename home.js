var pageNum = 1;

function checkNav() {
 if (pageNum == 1) {
  page1();
 }
 else {
  pageEmpty();
 }
}

function pageEmpty() {

}

function page1() {
 document.getElementById('navHeader').innerHTML =
  '<center>' +
  '<a href="#" onclick="" class="page"><<</a><a class="linkSelection" href="http://girlfriend.codark.com">Girlfriend&#39;s Page</a><a class="linkSelection" href="http://projects.codark.com">Projects</a><a class="linkSelection" href="http://deathClicker.codark.com">Death Clicker</a><a href="#" class="page" onclick="addOne()">>></a>' +
  '</center>';
}
