var webId;

function visit() {
  webId = document.getElementById('address').value;
  webId = webId.split('https://');
  webId = webId.split('http://');
  webId.filter(Boolean);
  document.getElementById('web').src = 'https://' + webId[0];
  document.getElementById('address').value = document.getElementById('web').src;
}

