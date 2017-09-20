function googleLinks() {
 for (i = 0; i < document.getElementsByTagName('google').length; i++) {
  var term = "https://www.google.com/search?source=hp&q=";
  var search = document.getElementsByTagName('google')[i].innerHTML;
  var name = search;
  var search = search.split(' ');
  var finish;
  for (j = 0; j < search.length; j++) {
   if(j == 0) {
	finish = search[j];
   } else {
	finish = finish + '+' + search[j];
   }
  }
  document.getElementsByTagName('google')[i].innerHTML = "<a href='" + term + finish + "' target='_blank'>" + name + "</a>"
 }
}
