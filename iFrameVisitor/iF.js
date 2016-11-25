function visit() {
  document.getElementById('web').src = 'https://' + document.getElementById('address').value;
  document.getElementById('address').value = document.getElementById('web').src;
}
