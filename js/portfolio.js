$(document).ready(function(){
  console.log("I'm readddyyyy!");
  $('#img0').delay(300).fadeTo(300, .5);
  $('#img0').fadeTo(300, 1, function(){
    $('#img1').fadeTo(300, .5);
    $('#img1').fadeTo(300, 1, function(){
      $('#img2').fadeTo(300, .5);
      $('#img2').fadeTo(300, 1, function(){
        $('#img3').fadeTo(300, .5);
        $('#img3').fadeTo(300, 1, function(){
          $('#img4').fadeTo(300, .5);
          $('#img4').fadeTo(300, 1, function(){
            $('#img5').fadeTo(300, .5);
            $('#img5').fadeTo(300, 1, function(){
              $('#img6').fadeTo(300, .5);
              $('#img6').fadeTo(300, 1, function(){
                $('#img7').fadeTo(300, .5);
                $('#img7').fadeTo(300, 1, function(){
                  $('#img8').fadeTo(300, .5);
                  $('#img8').fadeTo(300, 1, function(){
                    $('#img9').fadeTo(300, .5);
                    $('#img9').fadeTo(300, 1, function(){
                      $('#title-name').fadeTo(1000, 1, function(){
                        $('#title-sub').fadeTo(1000, 1, function(){
                          $('#down-arrow').slideDown(500);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

    })
  });
$('.skills-container').hover(function(){
  $('.skills-container').fadeTo(500, 1);},
  function(){
    $('.skills-container').fadeTo(500, .7);
  }
  )


})