function checkPerms() {
 if (globalCode == 2639301) {
  document.getElementById('loadVideo').src = "https://darkheart527.github.io/domain-storage/XiaoYing - James.mp4";
  document.getElementById('gCArea').style.visibility = 'hidden';
  alert("Successful Login - Page Ex's Page Logged Into")
  localStorage.globalCode001 = globalCode;
 } else {
  document.getElementById('gCArea').style.visibility = 'hidden';
  alert('Your Gc is incorrect');
 }
}

function loadGlobal() {
 document.getElementById('gcBox').value = Number(localStorage.globalCode001)
 globalCode = Number(localStorage.globalCode001);
 checkPerms();
}
