var webId;
var webId2;

function visit() {
  webId = document.getElementById('address').value;
  webId = webId.split('https://');
  webId.filter(Boolean);
  webId2 = webId.split('http://');
  document.getElementById('web').src = 'https://' + webId[0];
  document.getElementById('address').value = document.getElementById('web').src;
}

