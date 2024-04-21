$(document).ready(function () {
    $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      var opacity = 0.8 - scrollPosition / 1500    ; 

      $('.background').css('opacity', opacity);
    });
  });
  $('#link').click(function(){
    var link = "https://kittopp.github.io/kit.obr/"; // Replace this with your link
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(link).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Link copied to clipboard: " + link);
  });
  

  /*these codes are from the internet, sir. */
