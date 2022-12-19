function place(id,x_pos, y_pos) {
    var element = document.getElementById(id);
    element.style.position = "absolute";
    element.style.left = x_pos+'px';
    element.style.top = y_pos+'px';
}
function update(){
   document.addEventListener('keydown', keyPress);
} 
function keyPress(e) {
  var x = e.keyCode;
  
  var move = document.getElementById("move").getBoundingClientRect();
 
  var left = parseInt(move.left,10);
  var top = parseInt(move.top,10)
    
  switch (x) {
    case 37:
     place('move', left -100,  top);
      break;

    case 39:
   place('move', left+100,  top);
      break;
  }
}
update();