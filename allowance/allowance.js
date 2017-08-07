
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
       localStorage.setItem("goals", document.getElementById('displayAreaGoals').innerHTML);
      }
      function constantReloader() {
       document.getElementById('display2').innerHTML = "Money In Your Account: " + "<span id='moneyAmount'>" + Number(localStorage.MONEYZZ) + "</span>";
	   if (localStorage.MONEYZZ < 0) {
	    document.getElementById('moneyAmount').style = "color: red";   
	   } else if (localStorage.MONEYZZ < 10 & localStorage.MONEYZZ > (0 - 1)) {
	    document.getElementById('moneyAmount').style = "color: green";   
	   } else if (localStorage.MONEYZZ < 25 & localStorage.MONEYZZ > 9) {
	    document.getElementById('moneyAmount').style = "color: limegreen";   
	   } else if (localStorage.MONEYZZ < 50 & localStorage.MONEYZZ > 24) {
	    document.getElementById('moneyAmount').style = "color: blue";   
	   }
      }
      function load() {
       setInterval( function() { saver(); });
       setInterval( function() { constantReloader(); }, 25);
       document.getElementById('displayArea').innerHTML = localStorage.getItem("payments");
       document.getElementById('displayAreaGoals').innerHTML = localStorage.getItem("goals");
       Money = Number(localStorage.MONEYZZ);
      }
      function startUp() {
       if (localStorage.JOINEDZZ == null) {
        localStorage.JOINEDZZ = 1;
        localStorage.MONEYZZ = 0;
        localStorage.idNumGoal = 0;
        localStorage.setItem("payments", "");
        localStorage.setItem("goals", "");
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
	   document.getElementById('displayAreaGoals').innerHTML = '';
	   localStorage.idNum = 0;
	   localStorage.idNumGoal = 0;
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
	  
	  function no() {
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
	  
	  function openSG() {
	   document.getElementById('formGoal').innerHTML = "<form><input name='setGoal' id='formGoals' placeHolder='Your Goal'></input><input name='costOfGoalItem' id='formGoals2' min='0' max='250' type='number' placeHolder='Cost Of Your Goal'></input></form><button onClick='addGoal();'>Submit</button>"
	  }

	  function addGoal() {
       if (document.getElementById('formGoals').value == '') {
        alert('No Name Given');
       } else if (document.getElementById('formGoals2').value > -1) {
        passGoal(); 
       } else {
	    alert('Negatives Are NOT Allowed');
		document.getElementById('formGoals2').value = '';
	   }
	  }
	  
	  function passGoal() {
        if (document.getElementById('formGoals2').value == '') {
        alert('No Cost Given');
       } else if (document.getElementById('formGoals2').value == 0) {
	    document.getElementById('formGoals2').value = '';
		alert("You Can't Set A Free Goal");
	   } else {
        acceptGoal(); 
       }
	  }
	  
	  function acceptGoal() {
	   alert('Success!'); 
	   localStorage.idNumGoal = Number(localStorage.idNumGoal) + 1;
	   document.getElementById('displayAreaGoals').innerHTML = "<div " + 'class="goal" id="Goal' + localStorage.idNumGoal + '"' + ">" + document.getElementById('formGoals').value + " | " + document.getElementById('formGoals2').value + "<span class='goalBtn' onclick=" + 'document.getElementById(' + "'Goal" + localStorage.idNumGoal + "'" + ').remove();>' + "Delete This Goal</span></div>" + document.getElementById('displayAreaGoals').innerHTML;
	   document.getElementById('formGoal').innerHTML = '';
	  }
