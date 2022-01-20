/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Fonts - Google Fonts
*/

window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#27DA03", "#02FFF0", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#27DA03", "#02FFF0"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});



