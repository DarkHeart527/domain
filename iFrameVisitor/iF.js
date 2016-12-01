var webId;
var webId2;

function visit() {
  webId = document.getElementById('address').value;
  //webId = webId.split('https://');
  //webId.filter(Boolean);
  //webId2 = webId.split('http://');
  i = 1
  while i == 1 {
   i = i + 1
    webId[i];
    if (i == 200) {
     i = 0 
    }
  }
  document.getElementById('web').src = 'https://' + webId[i];
  document.getElementById('address').value = document.getElementById('web').src;
}
