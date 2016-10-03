// Example animation
var container = $("#container"),
    tl;

function getAnimation() {
  var element = $('<div class="creature"/>');
  container.append(element);
  TweenLite.set(element, {x:-30, y:300})
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //http://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html

 //create a semi-random tween
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft",
      values:[{x:60, y:80}, {x:150, y:30}, {x:400 + Math.random() *100, y:320*Math.random() + 50}, {x:500, y:320*Math.random() + 50}, {x:700, y:100}, {x:850, y:500}],
      autoRotate:true
    },
    ease:Linear.easeNone});
  return bezTween;
}

//create a bunch of Bezier tweens and add them to a timeline
function buildTimeline() {
  tl = new TimelineMax({repeat:300, onUpdate:updateSlider, delay:1});

  // show - hide video here I guess
  // bruk jQuery animate med opacity, eller kanskje ikke. Da begynner ikke
  // filmen fra starten --> jquery add/removeClass



  for (i = 0 ; i< 20; i++){
    //start creature animation every 0.17 seconds
    tl.add(getAnimation(), i * 0.17);
  }
}


// HELE KODEN

$( document ).ready(function() {

var options = {
  useEasing : true,
  useGrouping : true,
  separator : '',
  decimal : '',
  prefix : '',
  suffix : ''
};
var countEmployees = new CountUp("stats-employees", 0, 1020, 0, 2.5, options);
countEmployees.start();



// Example animation
var imageContainer = $("#image-container"),
    tl;

function getAnimation() {
  var element = $('<div class="creature"/>');
  imageContainer.append(element);
  TweenLite.set(element, {x:-30, y:300})
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //http://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html

 //create a semi-random tween
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft",
      values:[{x:60, y:80}, {x:150, y:30}, {x:400 + Math.random() *100, y:320*Math.random() + 50}, {x:500, y:320*Math.random() + 50}, {x:700, y:100}, {x:850, y:500}],
      autoRotate:true
    },
    ease:Linear.easeNone});
  return bezTween;
}

//create a bunch of Bezier tweens and add them to a timeline
function buildTimeline() {
  tl = new TimelineMax({repeat:300, onUpdate:updateSlider, delay:1});

  // show - hide video here I guess
  // bruk jQuery animate med opacity, eller kanskje ikke. Da begynner ikke
  // filmen fra starten --> jquery add/removeClass, evt append



  for (i = 0 ; i< 20; i++){
    //start creature animation every 0.17 seconds
    tl.add(getAnimation(), i * 0.17);
  }
}


// My test

// var logo = document.getElementById("logo");
//     TweenLite.to(logo, 1, {left:"632px"});






// --- jQueryUI Controls --- //

$("#slider").slider({
  range: false,
  min: 0,
  max: 1,
  step:0.001,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value);
    }
});



function updateSlider() {
  $("#slider").slider("value", tl.progress());
}


// bytt til touch eller swipe
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

buildTimeline();
tl.progress(0.5).timeScale(0);







});