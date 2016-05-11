var photospheres = window.g.photospheres;
var TINY_GIF = 'data:image/gif;base64,' + 
       'R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
function drawSphere(src){
  var scene = document.querySelector('a-scene');
  var sphere = document.createElement('a-entity');
  sphere.setAttribute('geometry', 'primitive: sphere; radius: 100');
  sphere.setAttribute('position', '0,0,0');
  sphere.setAttribute('material', 'src: url(' + src + '); side: double;');
  scene.appendChild(sphere);
};
var i = 0;
setInterval(function(){
  var sphere = document.querySelector('a-sphere');
  if(sphere){
    sphere.remove();
  }
  drawSphere(photospheres[i].media.src);
//  drawSphere(TINY_GIF);
  if( i < photospheres.length - 1){
    i++;
  } else {
    i = 0;
  }

},3000);


