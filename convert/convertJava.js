//Settings
var accountAmount = 4; //The number of existing accounts
//

//Vars
var cyt = "checkName(this, 'fname', 'submit')";
var ar_ext = ['pdf', 'js', 'jpe', 'html', 'txt'];        // array with blocked extensions
var type;
var account = Math.floor(Math.random() * accountAmount + 1)
//

//Start Functions
setTimeout( function() { randomizeAccounting() }, 500)
//

function checkName(el, to, sbm) {
  var name = el.value;
  var ar_name = name.split('.');
  var ar_nm = ar_name[0].split('\\');
  for(var i=0; i<ar_nm.length; i++) var nm = ar_nm[i];
  for(var i=0; i<ar_ext.length; i++) {
    if(ar_ext[i] == ar_name[1]) {
     alert("That file can't be used... Yet");
    } else {
  document.getElementById('typeInput2').innerHTML = '<input type="hidden" name="inputformat" value="' + ar_name[1] + '"	>'
  }
 }
}

function checkAgain() {
 document.getElementById('typeInput').value = document.getElementById('dontNeed2').value
}
//document.getElementById('file').files[0].size
function randomizeAccounting() {
 if (account == 1) {
  document.getElementById('api').value = 'Ga3f-fDysMt9IjXRQmajNBb1ezL-9Wze83Emebb7E6ULVs5cIPxAG91fCjB0niLPkDzHja2BLylx_c9VabKwXA';
 } else if (account == 2) {
   document.getElementById('api').value = 'nCzR3cehoJ05hmz8E5r8Cql--m1dGABeVok5BixWns3gs8yqQ3ZfyjbVn43Afl8id22OvwAysCElup72WTAZvQ';
 } else if (account == 3) {
  document.getElementById('api').value = 'YGR9BcShFnzqEk9vSBpm7eJCxSQga1EouWfHRGsoF_0uUDSELTCz9bdWcsZSPkU2z4s545mcOhlt93iduPlOpQ'
 } else if (account == 4) {
  document.getElementById('api').value = 'H8pVuvlGgnPsm0wfGQXho6rYJ7Rc-gJLSesiccIADzUMnAmNEUNeVVX_mfJL88fsVIv_AN_-geu5WhdvkZSnUw'
 }
}

function makeUrl() {
 document.getElementById('fFile').innerHTML = '<input type="url" id="urlT">';
 document.getElementById('dRC').innerHTML = '<a onhover="uUrl()" id="urlA">Download</a>';
}
//<input type="file" name="file" onchange="checkName(this, 'fname', 'submit')" id="file">
function makeFile() {
 document.getElementById('fFile').innerHTML = '<input type="file" name="file" onchange="' + cyt + '" id="file">';
 document.getElementById('dRC').innerHTML = '<input type="submit" value="Convert">';
}

function uUrl() {
 document.getElementById('urlA').href = document.getElementById('urlT').value;
}
