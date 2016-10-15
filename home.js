var pageNum = 1;
var sec1 = document.getElementById('section1').innerHtml;

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
 document.getElementById('section1').innerHtml = "Hey";
}
