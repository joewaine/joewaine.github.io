

var rad = Math.PI / 180;

var scrollPercentage = 0;

// one

var img1 = document.querySelector("#displacementFilter feTurbulence");


var img2 = document.querySelector("#displacementFilter feDisplacementMap");
var frames1 = 0;







function AnimateBaseFrequency1() {

console.log(document.getElementById('bfx').value);
console.log(document.getElementById('bfy').value);

console.log(document.getElementById('seed').value);
  bfx = 0.01 * document.getElementById('bfx').value;
  bfy = .01 * document.getElementById('bfy').value /10;
seed = document.getElementById('seed').value;



scale = document.getElementById('scale').value;
// let scale = scrollPercentage *1000;
  let numOctaves = 1
  bf = bfx.toString() + ' ' + bfy.toString();

  img1.setAttributeNS(null, 'seed', seed);
  img2.setAttributeNS(null, 'scale', scale);

  img1.setAttributeNS(null, 'baseFrequency', bf);
  window.requestAnimationFrame(AnimateBaseFrequency1);
}

window.requestAnimationFrame(AnimateBaseFrequency1);





































console.log(13);
function positionTheDot() {

    // What percentage down the page are we? 
 scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    

    console.log('s' + scrollPercentage);
    };

// Update dot position when we get a scroll event.
window.addEventListener("scroll", positionTheDot);

// Set the initial position of the dot.
positionTheDot();