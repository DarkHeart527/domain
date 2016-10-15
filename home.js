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
 document.getElementById('navHeader').innerHTML = "Hey";
}
