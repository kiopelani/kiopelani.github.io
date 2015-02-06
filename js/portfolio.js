function loadImages(){
  var $kids = $('#landing').children();
  $.each($kids, function(key, value){
    timePassed += 300;
    $(value).delay(timePassed).fadeTo(300, .5).fadeTo(300, 1);
  })
}

function loadTitles(){
  var $titles = $('#title').children();
  $.each($titles, function(key, value){
    timePassed += 400;
    $(value).delay(timePassed).fadeTo(1000, 1);
  })
}

function loadArrow(){
  $('#down-arrow').delay(timePassed + 300).slideDown(500);
}

function initSkillsContainerHover(){
  $('.skills-container').hover(function(){
    $('.skills-container').fadeTo(500, .7);},
    function(){
    $('.skills-container').fadeTo(500, 1);
    }
  )
}

$(document).ready(function(){
  timePassed = 0;
  loadImages();
  loadTitles();
  loadArrow();

  initSkillsContainerHover();
})
