$( document ).ready(function() {


// Fjerner musepekeren (for duet) funker ikke helt enda
// document.getElementById("body").style.cursor = "none";


// Sockets

var socket = io('http://localhost:3000/');

$(".anno1").mousedown(function(){
  socket.emit('seek', 0)
  lightAnno1()
})

$(".anno2").mousedown(function(){
    socket.emit('seek', 10.5)
    lightAnno2()
})

$(".anno3").mousedown(function(){
    socket.emit('seek', 20.5)
    lightAnno3()
})

$(".anno4").mousedown(function(){
    socket.emit('seek', 30.5)
    lightAnno4()
})

$(".anno5").mousedown(function(){
    socket.emit('seek', 40.5)
    lightAnno5()
})

$(".anno6").mousedown(function(){
    socket.emit('seek', 50.5)
    lightAnno6()
})


socket.on('annoChange', function(message){
  if (message === 'anno1') {
    lightAnno1()
  }
  else if (message === 'anno2') {
    lightAnno2()
  }
  else if (message === 'anno3') {
    lightAnno3()
  }
  else if (message === 'anno4') {
    lightAnno4()
  }
  else if (message === 'anno5') {
    lightAnno5()
  }
});


function lightAnno1(){
  $(".anno1").animate({opacity: 1}, 500, 'easeOutCirc');
  $(".anno2").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno3").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno4").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno5").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno6").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno7").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno8").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno9").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno10").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno11").animate({opacity: .4}, 500, 'easeOutCirc');
}
function lightAnno2() {
  $(".anno1").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno2").animate({opacity: 1}, 500, 'easeOutCirc');
  $(".anno3").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno4").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno5").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno6").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno7").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno8").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno9").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno10").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno11").animate({opacity: .4}, 500, 'easeOutCirc');
}
function lightAnno3() {
  $(".anno1").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno2").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno3").animate({opacity: 1}, 500, 'easeOutCirc');
  $(".anno4").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno5").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno6").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno7").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno8").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno9").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno10").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno11").animate({opacity: .4}, 500, 'easeOutCirc');
}
function lightAnno4() {
  $(".anno1").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno2").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno3").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno4").animate({opacity: 1}, 500, 'easeOutCirc');
  $(".anno5").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno6").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno7").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno8").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno9").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno10").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno11").animate({opacity: .4}, 500, 'easeOutCirc');
}
function lightAnno5() {
  $(".anno1").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno2").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno3").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno4").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno5").animate({opacity: 1}, 500, 'easeOutCirc');
  $(".anno6").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno7").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno8").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno9").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno10").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno11").animate({opacity: .4}, 500, 'easeOutCirc');
}
function lightAnno6() {
  $(".anno1").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno2").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno3").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno4").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno5").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno6").animate({opacity: 1}, 500, 'easeOutCirc');
  $(".anno7").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno8").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno9").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno10").animate({opacity: .4}, 500, 'easeOutCirc');
  $(".anno11").animate({opacity: .4}, 500, 'easeOutCirc');
}


// --- TIMELINE CONTROL --- //

$('#slider').slider({
  range: false,
  min: 0,
  max: 1,
  step:0.001,
  slide: function ( event, ui ) {
    // tl.pause();

    // console.log('VIDEO currentTime -->', video01.currentTime, 'VIDEO duration -->', video01.duration)
    // console.log('TIMELINE tl.progress -->', tl.progress(), 'TIMELINE tl.duration -->', tl.duration());
    // console.log('video01/duration', video01.currentTime/video01.duration);
    // tl.progress( ui.value);
    // video01.currentTime =  video01.currentTime/video01.duration;
    // if I can make it with a few small videoes: mirror3to4
    // video01.currentTime = ui.value * 16.3143;
    // video01.currentTime = ui.value * 28.77875;

        // counters
    if (ui.value < 0.16 ) {
      socket.emit('updateEmployees', 1020)
    } if (ui.value > 0.16 && ui.value < 0.33) {
      socket.emit('updateEmployees', 5670)
    } if (ui.value > 0.33 && ui.value < 0.49 ) {
      socket.emit('updateEmployees', 9070)
    } if (ui.value > 0.49 && ui.value < 0.65 ) {
      socket.emit('updateEmployees', 12670);
    } if (ui.value > 0.65 && ui.value < 0.81 ) {
      socket.emit('updateEmployees', 56070)
    }


    socket.emit('sliderChanged', ui.value);

    }
});

// function updateSlider() {
//   $("#slider").slider("value", tl.progress());
// }


function updateSlider() {

  socket.emit('sliderProgress', progress)

}


$("#slider, .ui-slider-handle").mousedown(function() {
  $('html, #slider, .ui-slider-handle').one("mouseup", function(e){
    // tl.resume();
  });
});

var sliderValue = $("#slider").slider("value");
console.info('sliderValue', sliderValue)

//smoothe play pause by tweening the timeScale()

$("#playPause").click(function(){
  if(this.innerHTML === "play"){
    this.innerHTML = "pause"
    // TweenLite.to(tl, 2, {timeScale:1})
  } else {
    this.innerHTML = "play"
    // TweenLite.to(tl, 2, {timeScale:0})
  }
})

//   starting from

// --- FINISH TIMELINE --- //





});