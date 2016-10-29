var globalCode = null;
setInterval( function() { globalCodeChanger() });

function globalCodeChanger() {
 globalCode = document.getElementById('gcBox').value;
}
