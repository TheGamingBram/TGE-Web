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


const d = new Date();
let month = d.getUTCMonth(); // 0 = Jan, 1 = Feb, 2 = Mar, 3 = Apr, 4 = May, 5 = Jun, 6 = Jul, 7 = Aug, 8 = Sep, 9 = Oct, 10 = Nov, 11 = Dec
// console.log(month);
obje = document.getElementById('Background');

titleobjects = document.getElementsByClassName('loader');
for(var i = 0; i < titleobjects.length; i++){
  titleobjects[i].style.display = 'none';
}



if(month == 11){
  obje.style.backgroundImage = "url('https://i.imgur.com/mPDNe0D.jpg')";
  document.getElementById('xmas').style.display = 'block';
}else if(month == 9){
  obje.style.backgroundImage = "url('https://i.imgur.com/BRML8Jo.jpg')";
  document.getElementById('spook').style.display = 'block';
}else{
  document.getElementById('title').style.display = 'block';
}

