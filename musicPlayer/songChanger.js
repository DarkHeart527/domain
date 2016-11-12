
/*

		    mId[0] +
			mId[18] +
			mId[21] + 
			mId[22] +
			mId[24] +
			mId[13] +
			mId[32]

*/

function changeSongs() {
if (document.getElementById('type').value == "all") {
 document.getElementById('selector').innerHTML = 
		    mId[0] +
		    mId[1] +
			mId[2] +
			mId[3] +
			mId[4] +
			mId[5] +
			mId[6] +
			mId[7] +
			mId[8] +
			mId[9] +
			mId[10] +
			mId[11] +
			mId[12] +
			mId[13] +
			mId[14] +
			mId[15] +
			mId[16] +
			mId[17] +
			mId[18] +
			mId[19] +
			mId[20] +
			mId[21] +
			mId[22] +
			mId[23] +
			mId[24] +
			mId[25] +
			mId[26] +
			mId[27] +
			mId[28] +
			mId[29] +
			mId[30] +
			mId[31] +
			mId[32] +
			mId[33] +
			mId[34] +
			mId[35] +
			mId[36] +
			mId[37] +
			mId[38] +
			mId[39] +
			mId[40] +
			mId[41] +
			mId[42] +
			mId[43] +
			mId[44] +
			mId[45] +
			mId[46] +
			mId[47] +
			mId[48] +
			mId[49] +
			mId[50] +
			mId[51] +
			mId[52] +
			mId[53] +
			mId[54] +
			mId[55];
			}
	else if (document.getElementById('type').value == "pocketband") {
	 document.getElementById('selector').innerHTML = 		    
			mId[0] +
		    mId[1] +
			mId[3] +
			mId[4] +
			mId[7] +
			mId[18] +
			mId[19] +
			mId[20] +
			mId[21] +
			mId[22] +
			mId[23] +
			mId[25] +
			mId[27] +
			mId[28] +
			mId[29] +
			mId[30] +
			mId[32] +
			mId[45] +
			mId[47] +
			mId[49];
	} 
	else if (document.getElementById('type').value == "isaiahsPlaylist") {
	document.getElementById('selector').innerHTML = 
			mId[0] +
			mId[33] +
			mId[31] +
			mId[26] +
			mId[34] +
			mId[35] +
			mId[36] +
			mId[37] +
			mId[38] +
			mId[39] +
			mId[40] +
			mId[41] +
			mId[42] +
			mId[43] +
			mId[44] +
			mId[50];
		 }
		  else if (document.getElementById('type').value == "author_Drake") {
		   document.getElementById('selector').innerHTML =
		   mId[0] +
		   mId[26] +
		   mId[43];
		  }
		  
		  else if (document.getElementById('type').value == "author_21Savage") {
		  
		  document.getElementById('selector').innerHTML =
		  mId[0] +
		  mId[34] +
		  mId[35] +
		  mId[36] +
		  mId[38] +
		  mId[41];
		  }
		  
		  else if (document.getElementById('type').value == "author_Ricegum") {
		  
		  document.getElementById('selector').innerHTML =
		  mId[0] +
		  mId[42];
		  }
}
