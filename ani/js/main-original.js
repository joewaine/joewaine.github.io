var img = document.querySelector("#displacementFilter feTurbulence");
var frames = 0;
var rad = Math.PI / 180;

var scrollPercentage = 0;

function AnimateBaseFrequency() {
  //baseFrequency="0.01 .1"
  bfx = 0.01;
  bfy = .1;
  bfy = scrollPercentage/100;
  frames += .25
//   frames += scrollPercentage;
  console.log('frames ' + frames)
  bfx += 0.001 * Math.cos(frames * rad);
  bfy += 0.005 * Math.sin(frames * rad);

  bf = bfx.toString() + ' ' + bfy.toString();
  img.setAttributeNS(null, 'baseFrequency', bf);

  window.requestAnimationFrame(AnimateBaseFrequency);
}

window.requestAnimationFrame(AnimateBaseFrequency);




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