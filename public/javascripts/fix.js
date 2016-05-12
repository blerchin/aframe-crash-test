var TINY_GIF = 'data:image/gif;base64,' + 
       'R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

var photospheres = window.g.photospheres;

var sphere = null;
function drawSphere(src){
  var scene = document.querySelector('a-scene');
  sphere = document.createElement('a-entity');
  sphere.setAttribute('geometry', 'primitive: sphere; radius: 100');
  sphere.setAttribute('position', '0,0,0');
  sphere.setAttribute('material', 'src: url(' + src + '); side: double;');
  scene.appendChild(sphere);
};

drawSphere(TINY_GIF);
var i = 0;
setInterval(function(){
  requestAnimationFrame(function(){
    var src = photospheres[i].media.src;
    sphere.setAttribute('material', 'src: url(' + src + '); side: double;');

    if( i < photospheres.length - 1){
      i++;
    } else {
      i = 0;
    }
  })
},5000);


