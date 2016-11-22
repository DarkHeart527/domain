
	  var d = new Date();
      var Money = null;
	  var checkNegative = null;
	  var Month = Number(d.getMonth() + 1);
	  var Day = d.getDate();
	  var Year = d.getFullYear();
	  var dates = Month + " - " + Day + " - " + Year;
	  
      function addOne() {
       document.getElementById('form').innerHTML = "<form><input name='add' id='form1' placeHolder='Chore/Reason'></input><input name='pay' id='form2' type='number' min='0' max='100' placeHolder='Earn Amount'></input></form><button onClick='submitAddition()'>Submit</button>"
      }
      function takeOne() {
       document.getElementById('form').innerHTML = "<form><input name='purchase' id='form1' placeHolder='The purchased item'></input><input name='cost' id='form2' min='0' max='250' type='number' placeHolder='Cost Of This'></input></form><button onClick='submitSubtraction()'>Submit</button>"
      }
      function saver() {
       localStorage.MONEYZZ = Money;
       localStorage.JOINEDZZ = 1;
       localStorage.setItem("payments", document.getElementById('displayArea').innerHTML);
      }
      function constantReloader() {
       document.getElementById('display2').innerHTML = "Money In Your Account: " + Number(localStorage.MONEYZZ);
	   if (localStorage.MONEYZZ < 0) {
	    checkNegative = "-";
	   } else {
	    checkNegative = '';
	   }
      }
      function load() {
       setInterval( function() { saver(); });
       setInterval( function() { constantReloader(); }, 25);
       document.getElementById('displayArea').innerHTML = localStorage.getItem("payments");
       Money = Number(localStorage.MONEYZZ);
      }
      function startUp() {
       if (localStorage.JOINEDZZ == null) {
        localStorage.JOINEDZZ = 1;
        localStorage.MONEYZZ = 0;
        localStorage.setItem("payments", "");
        alert('Welcome');
		localStorage.idNum = 0;
       } else if (localStorage.JOINEDZZ == 1) {
        alert('Welcome Back');
       }
      }
      function submitSubtraction() {
       if (document.getElementById('form1').value == '') {
        alert('No Name Given');
       } else if (document.getElementById('form2').value > -1) {
        passSub(); 
       } else {
	    alert('Negatives Are NOT Allowed');
		document.getElementById('form2').value = '';
	   }
      }
      function passSub() {
        if (document.getElementById('form2').value == '') {
        alert('No Cost Given');
       } else if (document.getElementById('form2').value == 0) {
	    document.getElementById('form2').value = '';
		alert("You Can't Take Nothing");
	   } else {
        acceptSub(); 
       }
      }
      function acceptSub() {
	   //localStorage.MONEYZZ = Number(localStorage.MONEYZZ) - document.getElementById('form2').value;
	   Money = Number(Money) - Number(document.getElementById('form2').value);
       alert('Success!'); 
	   localStorage.idNum = Number(localStorage.idNum) + 1;
	   document.getElementById('displayArea').innerHTML = "<div " + 'class="sub" id="Log' + localStorage.idNum + '"' + ">" + dates + ' | ' + document.getElementById('form1').value + " | " + '-' + document.getElementById('form2').value + "<span class='subBtn' onclick=" + 'document.getElementById(' + "'Log" + localStorage.idNum + "'" + ').remove();>' + "Delete This Log</span></div>" + document.getElementById('displayArea').innerHTML;
	   document.getElementById('form').innerHTML = '';
      }
      function submitAddition() {
       if (document.getElementById('form1').value == '') {
        alert('No Name Given');
       } else if (document.getElementById('form2').value > -1) {
        passAdd(); 
       } else {
	    alert('Negatives Are NOT Allowed');
		document.getElementById('form2').value = '';
	   }
      }
      function passAdd() {
        if (document.getElementById('form2').value == '') {
        alert('No Amount Given');
       } else if (document.getElementById('form2').value == 0) {
	    document.getElementById('form2').value = '';
		alert("You Can't Give Yourself Nothing");
	   } else {
        acceptAdd(); 
       }
      }
      function acceptAdd() {
	   //localStorage.MONEYZZ = Number(localStorage.MONEYZZ) + document.getElementById('form2').value;
	   Money = Number(Money) + Number(document.getElementById('form2').value);
       alert('Success!'); 
	   localStorage.idNum = Number(localStorage.idNum) + 1;
	   document.getElementById('displayArea').innerHTML = "<div " + 'class="add" id="Log' + localStorage.idNum + '"' + ">" + dates + ' | ' + document.getElementById('form1').value + " | " + document.getElementById('form2').value + "<span class='AddBtn' onclick=" + 'document.getElementById(' + "'Log" + localStorage.idNum + "'" + ').remove();>' + "Delete This Log</span></div>" + document.getElementById('displayArea').innerHTML;
	   document.getElementById('form').innerHTML = '';
      }
	  
	  function reset() {
	  document.getElementById('resetButton').innerHTML = "";
	  localStorage.idNum = 0;
	   document.getElementById('confirm').innerHTML = "<button onClick='yes()'>Yes</button><button onClick='no()'>No</button>"
	  }
	  
	  function deleteAllLogs() {
	   document.getElementById('displayArea').innerHTML = '';
	   localStorage.setItem("payments", '');
	  }
	  
	  function yes() {
	   localStorage.MONEYZZ = 0;
	   Money = 0;
	   localStorage.JOINEDZZ = null;
	   document.getElementById('displayArea').innerHTML = '';
	   localStorage.idNum = 0;
	   localStorage.setItem("payments", '');
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
	  
	  function no() {
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
