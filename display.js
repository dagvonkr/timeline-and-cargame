$( document ).ready(function() {


// Fjerner musepekeren (for duet) funker ikke helt enda
// document.getElementById("body").style.cursor = "none";


// Sockets

var socket = io('http://localhost:3000/');

socket.on('sliderChanged', function (message) {
  // console.info(' yay! sliderChanged', message);
  tl.progress(message);
});


socket.on('seek', function(message){
  tl.seek(message)
})

socket.on('sliderProgress', function (message) {
  console.info('Wooh! sliderProgress', message);
  $("#slider").slider("value", message );
});

// Counter animation
var options = {
  useEasing : true,
  useGrouping : true,
  separator : '',
  decimal : '',
  prefix : '',
  suffix : ''
};

var countEmployees = new CountUp('stats-employees', 0, 0, 0, .5, options);
countEmployees.start();

socket.on('updateEmployees', function(message) {
  countEmployees.update(message);
});

var image01 = $('.image01');
var image02 = $('.image02');
var image03 = $('.image03');
var image04 = $('.image04');
var image05 = $('.image05');
var image06 = $('.image06');

var video01 = document.getElementById('video01');

// !END


// Text animation:

// var mySplitText = new SplitText("#animation-text", {type:"words,chars"});
// var chars = mySplitText.chars;

// !END


var tl = new TimelineMax({repeat:1100, onUpdate:updateSlider, pause:false});
// var tl = new TimelineMax({repeat:3000, onUpdate:updateSlider, delay:1});

//             duration
tl.from(image01, 0.5, {autoAlpha:0, opacity:1,
    onStart: function(){
      countEmployees.update(1020);
      // chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0";
      video01.play();

      socket.emit('annoChange', 'anno1')

    }})
    // text animation
  .from($('.text01'), 0, {autoAlpha:0, opacity:1})


  .from(image02, 0.5, {autoAlpha:0, opacity:1, x: -750,
    onStart: function(){
      countEmployees.update(5670);
      video01.play();
      video01.currentTime =  6.6;
      socket.emit('annoChange', 'anno2')
    }}, '+=10')

   // text animation
  .from($('.text01'), 0, {autoAlpha:0, opacity:0})
  .from($('.text02'), 0, {autoAlpha:0, opacity:1})

  // world map animation
  .from($('.country1-1'), 0, {autoAlpha:0, opacity:1})
  .from($('.country1-2'), 0.2, {autoAlpha:0, opacity:1})
  .from($('.country1-3'), 0.2, {autoAlpha:0, opacity:1})

  .from(image03, 0.5, {autoAlpha:0, opacity:1, x: 0,
    onStart: function(){
      countEmployees.update(9070);
      video01.play();
      video01.currentTime =  13.2;
      socket.emit('annoChange', 'anno3')
    }}, '+=10')

   // text animation
  .from($('.text02'), 0, {autoAlpha:0, opacity:0})
  .from($('.text03'), 0, {autoAlpha:0, opacity:1})

  // world map animation
  .from($('.country2-1'), 0.2, {autoAlpha:0, opacity:1})
  .from($('.country2-2'), 0.2, {autoAlpha:0, opacity:1})

  .from(image04, 0.5, {autoAlpha:0, opacity:1,
    onStart: function(){
      countEmployees.update(12670);
      video01.play();
      video01.currentTime =  19.8;
      socket.emit('annoChange', 'anno4')
    }}, '+=10')

   // text animation
  .from($('.text03'), 0, {autoAlpha:0, opacity:0})
  .from($('.text04'), 0, {autoAlpha:0, opacity:1})


  .from(image05, 0.5, {autoAlpha:0, opacity:1,
    onStart: function(){
      countEmployees.update(56070);
      video01.play();
      video01.currentTime =  26.4;
      socket.emit('annoChange', 'anno5')
    }}, '+=10')

  // text animation
  .from($('.text04'), 0, {autoAlpha:0, opacity:0})
  .from($('.text05'), 0, {autoAlpha:0, opacity:1})

  .from(image06, 0.5, {autoAlpha:0, opacity:1}, '+=10')




  // .from(video01, 0.5, {autoAlpha:0, opacity:1}, '+=5')
  // show - hide video here I guess
  // bruk jQuery animate med opacity, eller kanskje ikke. Da begynner ikke
  // filmen fra starten --> jquery add/removeClass, evt append


// --- TIMELINE --- //

$('#slider').slider({
  range: false,
  min: 0,
  max: 1,
  step:0.001,
  slide: function ( event, ui ) {
    tl.pause();

    // console.log('VIDEO currentTime -->', video01.currentTime, 'VIDEO duration -->', video01.duration)
    // console.log('TIMELINE tl.progress -->', tl.progress(), 'TIMELINE tl.duration -->', tl.duration());
    // console.log('video01/duration', video01.currentTime/video01.duration);
    tl.progress( ui.value);
    // video01.currentTime =  video01.currentTime/video01.duration;
    // if I can make it with a few small videoes: mirror3to4
    // video01.currentTime = ui.value * 16.3143;
    video01.currentTime = ui.value * 28.77875;


    // Dette kommer ikke med i websocet oppdateringen nå!!
    // counters
    if (ui.value < 0.16 ) {
      countEmployees.update(1020);
    } if (ui.value > 0.16 && ui.value < 0.33) {
      countEmployees.update(5670);
    } if (ui.value > 0.33 && ui.value < 0.49 ) {
      countEmployees.update(9070);
    } if (ui.value > 0.49 && ui.value < 0.65 ) {
      countEmployees.update(12670);
    } if (ui.value > 0.65 && ui.value < 0.81 ) {
      countEmployees.update(56070);
    }

    }
});



function updateSlider() {

  $("#slider").slider("value", tl.progress());

  // var sliderValue = $("#slider").slider("value");
  // console.info('sliderValue', sliderValue)
}


$("#slider, .ui-slider-handle").mousedown(function() {
  $('html, #slider, .ui-slider-handle').one("mouseup", function(e){
    tl.resume();
  });
});

//smoothe play pause by tweening the timeScale()

$("#playPause").click(function(){
  if(this.innerHTML === "play"){
    this.innerHTML = "pause"
    TweenLite.to(tl, 2, {timeScale:1})
  } else {
    this.innerHTML = "play"
    TweenLite.to(tl, 2, {timeScale:0})
  }
})

//   starting from
tl.progress(0).timeScale(0);




// --- FINISH TIMELINE --- //





});