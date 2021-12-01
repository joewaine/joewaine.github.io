// original

// var img = document.querySelector("#displacementFilter feTurbulence");
// var frames = 0;
// var rad = Math.PI / 180;

// var scrollPercentage = 0;

// function AnimateBaseFrequency() {
//   //baseFrequency="0.01 .1"
//   bfx = 0.01;
//   bfy = .1;
//   bfy = scrollPercentage/100;
//   frames += .25
// //   frames += scrollPercentage;
//   console.log('frames ' + frames)
//   bfx += 0.001 * Math.cos(frames * rad);
//   bfy += 0.005 * Math.sin(frames * rad);

//   bf = bfx.toString() + ' ' + bfy.toString();
//   img.setAttributeNS(null, 'baseFrequency', bf);

//   window.requestAnimationFrame(AnimateBaseFrequency);
// }

// window.requestAnimationFrame(AnimateBaseFrequency);


var rad = Math.PI / 180;

var scrollPercentage = 0;

// one

var img1 = document.querySelector("#displacementFilter feTurbulence");


var img2 = document.querySelector("#displacementFilter feDisplacementMap");
var frames1 = 0;


function AnimateBaseFrequency1() {

  console.log(document.getElementById('bfx').value)
  //baseFrequency="0.01 .1"
  bfx = 1;
  bfy = .05;
  bfx = 0.01 * document.getElementById('bfx').value;
  bfy = .01 * document.getElementById('bfy').value;

  let seed = document.getElementById('seed').value;
  // let numOctaves = document.getElementById('numOctaves').value/25;
  // let scale = document.getElementById('scale').value;

let scale = scrollPercentage *1000;
  let numOctaves = 1
  // bfy = scrollPercentage/100;
  // frames1 += .25
  // frames1 += scrollPercentage;
  // bfx += 0.001 * Math.cos(frames1 * rad);
  // bfy += 0.005 * Math.sin(frames1 * rad);
  bf = bfx.toString() + ' ' + bfy.toString();
  // img1.setAttributeNS(null, 'baseFrequency', bf);
  // img1.setAttributeNS(null, 'numOctaves', numOctaves);
  // img1.setAttributeNS(null, 'seed', seed);
  img2.setAttributeNS(null, 'scale', scale)
  window.requestAnimationFrame(AnimateBaseFrequency1);
}

window.requestAnimationFrame(AnimateBaseFrequency1);














console.log(13);
function positionTheDot() {

    // What percentage down the page are we? 
 scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    

    // console.log('s' + scrollPercentage);
    };

// Update dot position when we get a scroll event.
window.addEventListener("scroll", positionTheDot);

// Set the initial position of the dot.
positionTheDot();