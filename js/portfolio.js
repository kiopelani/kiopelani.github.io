$(document).ready(function(){
  console.log("I'm readddyyyy!");
  $('#navbar-container').hover(function(){
    $(this).fadeTo(300, 1);
  },
  function(){
    $(this).fadeTo(300, .7);
  }
  )

  // $('.portfolio-item').hover(function(){
  //   $(this).fadeTo(300, .2);
  // },
  // function(){
  //    $(this).fadeTo(300, 1);
  // }
  // )
})