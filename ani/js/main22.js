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
var frames1 = 0;


function AnimateBaseFrequency1() {
  //baseFrequency="0.01 .1"
  bfx = 1;
  bfy = .5;
  bfx = 0.1;
  bfy = .21;
  // bfy = scrollPercentage/100;
  // frames1 += .25
  // frames1 += scrollPercentage;
  console.log('frames ' + frames1)
  bfx += 0.001 * Math.cos(frames1 * rad);
  bfy += 0.005 * Math.sin(frames1 * rad);

  bf = bfx.toString() + ' ' + bfy.toString();
  img1.setAttributeNS(null, 'baseFrequency', bf);

  window.requestAnimationFrame(AnimateBaseFrequency1);
}

window.requestAnimationFrame(AnimateBaseFrequency1);


// two

var img2 = document.querySelector("#displacementFilter2 feTurbulence");
var frames2 = 0;


function AnimateBaseFrequency2() {
  //baseFrequency="0.01 .1"
  bfx = 0.1;
  bfy = .1;
  // bfy = scrollPercentage/1000;
  // frames2 += .25
  // frames2 += scrollPercentage;
//   frames += scrollPercentage;
  console.log('frames ' + frames)
  bfx += 0.001 * Math.cos(frames2 * rad);
  bfy += 0.005 * Math.sin(frames2* rad);

  bf = bfx.toString() + ' ' + bfy.toString();
  img2.setAttributeNS(null, 'baseFrequency', bf);

  window.requestAnimationFrame(AnimateBaseFrequency2);
}

window.requestAnimationFrame(AnimateBaseFrequency2);



// three


var img3 = document.querySelector("#displacementFilter3 feTurbulence");
var frames3 = 0;


function AnimateBaseFrequency3() {
  //baseFrequency="0.01 .1"
  bfx = 0.01;
  bfy = .1;
  bfy = scrollPercentage/1000;
  // frames3 += .25


  bfx = 0.01;
  bfy = .1;
  // bfy = scrollPercentage/1000;
  frames3 += .25
  // frames3 += scrollPercentage;
//   frames += scrollPercentage;
  console.log('frames ' + frames)
  bfx += 0.001 * Math.cos(frames3 * rad);
  bfy += 0.005 * Math.sin(frames3 * rad);

  bf = bfx.toString() + ' ' + bfy.toString();
  img3.setAttributeNS(null, 'baseFrequency', bf);

  window.requestAnimationFrame(AnimateBaseFrequency3);
}

window.requestAnimationFrame(AnimateBaseFrequency3);







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