//Settings
var accountAmount = 4; //The number of existing accounts
//

//Vars
var ar_ext = ['pdf', 'gif', 'jpe', 'jpg'];        // array with allowed extensions
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
      re = 1;
      break;
    }
  }
  document.getElementById('typeInput2').innerHTML = '<input type="hidden" name="inputformat" value="' + ar_name[1] + '"	>'
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
 document.getElementById('file').type = 'url';
}

function makeFile() {
 document.getElementById('file').type = 'file';
}