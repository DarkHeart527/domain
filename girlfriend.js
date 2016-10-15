setInterval( function() { movePic() }, 200);

function movePic() {
 //setTimeout( function() { document.getElementById('background').src = 'https://darkheart527.github.io/domain-storage/Heart.png';}, 100);
 //setTimeout( function() { document.getElementById('background').src = 'https://darkheart527.github.io/domain-storage/Heart2.png';}, 200);
 setTimeout( function() { document.getElementById('test').style = "background-color: red;background: url('https://darkheart527.github.io/domain-storage/Heart.png') repeat fixed"}, 100);
 setTimeout( function() { document.getElementById('test').style = "background-color: blue;"}, 200);
}
