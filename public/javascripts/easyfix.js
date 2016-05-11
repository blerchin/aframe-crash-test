var TINY_GIF = 'data:image/gif;base64,' + 
       'R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

var photospheres = window.g.photospheres;
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
  var spheres = document.querySelectorAll('a-entity');
  for(var s = 0; s<spheres.length; s++ ){
    spheres[s].setAttribute('material', 'src: url(' + TINY_GIF + '); side: double;');
  };
  drawSphere(photospheres[i].media.src);
  if( i < photospheres.length - 1){
    i++;
  } else {
    i = 0;
  }

},3000);


