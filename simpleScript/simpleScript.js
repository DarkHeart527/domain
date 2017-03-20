/*

*/

var newElement = function(elementTag, idAddingTo, beforeAfter, html, idName, className, styling) {
				  var info = {elementTag: elementTag,
							  idTo: idAddingTo,
							  beforeAfter: beforeAfter,
							  html: html,
							  idName: idName,
							  className:className,
							  styling: styling}
							  
				  elmtT = {openT: "<" + info.elementTag + " id='" + info.idName + "' class='" + info.className + "' style='" + info.styling + "'" + ">", closeT: "</" + info.elementTag + ">"}
				  elem = document.getElementById(info.idTo);
				  if (info.beforeAfter === 'after') {
				   elem.innerHTML = elem.innerHTML + elmtT.openT + info.html + elmtT.closeT;
				  } else if (info.beforeAfter === 'before') {
				   elem.innerHTML = elmtT.openT + info.html + elmtT.closeT + elem.innerHTML;
				  } else {
				   console.error('Error: Syntax of "beforeAfter" is incorrect \nThis area is either AFTER or BEFORE\nValue = ' + info.beforeAfter);
				  }
				  if (info.className == undefined | info.className == null | info.className == 'none') {
				   document.getElementById(info.idName).className = ''
				  }
				  if (info.styling == undefined | info.styling == null | info.styling == 'none') {
				   document.getElementById(info.idName).style = ''
				  }
				  if (info.idName == undefined | info.idName == null | info.idName == 'none') {
				   document.getElementById(info.idName).id = ''
				  }
				  console.log(info);
				  console.log(elmtT);
				 }
var numberRandom = function(targetId, minNum, maxNum, useText, beforeAfter, iText) {
				  if (useText == true) {
				   if (beforeAfter == 'after') {
					document.getElementById(targetId).innerHTML = Number(Math.floor(Math.random() * maxNum) + minNum) + iText;
				   } else if (beforeAfter == 'before') {
					document.getElementById(targetId).innerHTML = iText + Number(Math.floor(Math.random() * maxNum) + minNum);
				   } else {
				   console.error('Error: Syntax of "beforeAfter" is incorrect \nThis area is either AFTER or BEFORE\nValue = ' + beforeAfter);
				   }
				  } else {
				   document.getElementById(targetId).innerHTML = Math.floor(Math.random() * maxNum) + minNum;
				  }
				 }
