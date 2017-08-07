var d = new Date();
var Bday = d.getDate();
var Bmonth = d.getMonth();
var year = d.getFullYear();
var day = Bday;
var month = Bmonth + 1;


function loadPage() {
 document.getElementById('currentDayMonth').innerHTML = month;
 document.getElementById('currentDayDay').innerHTML = day;
 document.getElementById('currentDayYear').innerHTML = year;
}

function reloadChangeDate() {
 if (day == 0) {
  if (month == 3) {
   if (year == 2020) {
	day = 29
   } else {
	day = 28;
	month = month - 1;
   }
  } else {
   day = 31;
   month = month - 1;
   if (month == 0) {
	month = 12;
	year = year - 1;
   }
  }
 }
 if (day == 32) {
  day = 1;
  month = month + 1;
  if (month == 13) {
   year = year + 1;
  }
 }
 document.getElementById('currentDayMonth').innerHTML = month;
 document.getElementById('currentDayDay').innerHTML = day;
 document.getElementById('currentDayYear').innerHTML = year;
}
