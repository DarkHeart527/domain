//alert('The Home Screen Is Currently Being Remade\nPlease Be Aware That Some Errors Can And Will Exist')

var pageNum = 1;

function checkNav() {
 if (pageNum == 1) {
  page1();
 }
 else {
  pageEmpty();
 }
}

function addOne() {
 pageNum = Number(pageNum + 1);
 checkNav();
}

function deleteOne() {
if (document.getElementById('leftLink').disabled == true) {
} else {
 pageNum = Number(pageNum - 1);
 checkNav();
 }
}

function pageEmpty() {
 page1Name = '';
 page1Link = '';
 page2Name = '';
 page2Link = '';
 page3Name = '';
 page3Link = '';
 page4Name = '';
 page4Link = '';
 page5Name = '';
 page5Link = '';
 page6Name = '';
 page6Link = '';
 changePages();
}

function page1() {
 page1Name = 'Convert';
 page1Link = 'convert/start.html';
 page2Name = '';
 page2Link = '';
 page3Name = '';
 page3Link = '';
 page4Name = '';
 page4Link = '';
 page5Name = '';
 page5Link = '';
 page6Name = '';
 page6Link = '';
 changePages();
}

function changePages() {
 if (pageNum == 1 | pageNum < 1) {
  document.getElementById('leftLink').innerHTML = '';
  document.getElementById('leftLink').disabled = true;
 } else {
  document.getElementById('leftLink').innerHTML = '(---';
  document.getElementById('leftLink').disabled = false;
 }
 document.getElementById('link1').innerHTML = "<a id='link1A'>" + page1Name + "</a>";
 document.getElementById('link1A').href = page1Link;
 document.getElementById('link2').innerHTML = "<a id='link2A'>" + page2Name + "</a>";
 document.getElementById('link2A').href = page2Link;
 document.getElementById('link3').innerHTML = "<a id='link3A'>" + page3Name + "</a>";
 document.getElementById('link3A').href = page3Link;
 document.getElementById('link4').innerHTML = "<a id='link4A'>" + page4Name + "</a>";
 document.getElementById('link4A').href = page4Link;
 document.getElementById('link5').innerHTML = "<a id='link5A'>" + page5Name + "</a>";
 document.getElementById('link5A').href = page5Link;
 document.getElementById('link6').innerHTML = "<a id='link6A'>" + page6Name + "</a>";
 document.getElementById('link6A').href = page6Link;
}
