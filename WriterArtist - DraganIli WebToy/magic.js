// This is the engine script where magic happens! Author : Dragan Ilievski

var pos = {x: 0, y: window.innerHeight/2};
var counter = 0;
var minimumfont = 3;
var angleDistortion = 0;
var message = "Love? Love... Above all things I believe in love! Love is like oxygen. Love is a many splendored thing, love lifts us up where we belong, all you need is love! My gift is my song and this one's for you, And you can tell everybody that this is your song. It may be quite simple but now that it's done, I hope you don't mind ,I hope you don't mind that I put down in words ,How wonderful life is now you're in the world. I sat on the roof and I kicked off the moss, Well a some of the verses, well they've got me quite cross,But the sun's been kind while I wrote this song.It's for people like you that keep it turned on, So excuse me forgetting but these things I do, You see I've forgotten, if they're green or they're blue,Anyway the thing is what I really mean,Yours are the sweetest eyes I've ever seen.";

var canvas;
var context;
var mouse = {x: 0, y: 0, down: false}

function init() {
  canvas = document.getElementById( 'canvas' );
  context = canvas.getContext( '2d' );
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  canvas.addEventListener('mousemove', mouseMove, false);
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup',   mouseUp,   false);
  canvas.addEventListener('mouseout',  mouseUp,  false);  
  canvas.addEventListener('dblclick', doubleClick, false);
  
  window.onresize = function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

function mouseMove ( event ){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  draw();
}

function draw() {
 if ( mouse.down ) {
    var d = distance( pos, mouse );
    var fontSize = minimumfont + d/2;
    var letter = message[counter];
    var stepSize = textWidth( letter, fontSize );
    
    if (d > stepSize) {
      var angle = Math.atan2(mouse.y-pos.y, mouse.x-pos.x);
      
      context.font = fontSize + "px Comic Sans MS";
    
      context.save();
      context.translate( pos.x, pos.y);
      context.rotate( angle );
      context.fillText(letter,0,0);
      context.restore();

      counter++;
      if (counter > message.length-1) {
        counter = 0;
      }
    
      pos.x = pos.x + Math.cos(angle) * stepSize;
      pos.y = pos.y + Math.sin(angle) * stepSize;

      }
  }     
}

function distance( pt, pt2 ){
  
  var xs = 0;
  var ys = 0;
 
  xs = pt2.x - pt.x;
  xs = xs * xs;
 
  ys = pt2.y - pt.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

function mouseDown( event ){
  mouse.down = true;
  pos.x = event.pageX;
  pos.y = event.pageY;
  
  document.getElementById('info').style.display = 'none';
}

function mouseUp( event ){
    mouse.down = false;
}

function doubleClick( event ) {
  canvas.width = canvas.width; 
}

function textWidth( string, size ) {
  context.font = size + "px Comic Sans MS";
  
  if ( context.fillText ) {
    return context.measureText( string ).width;
  } else if ( context.mozDrawText) {
    return context.mozMeasureText( string );
  }
  
 };

init();