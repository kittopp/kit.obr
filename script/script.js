$(document).ready(function () {
    $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      var opacity = 0.8 - scrollPosition / 1500    ; 

      $('.background').css('opacity', opacity);
    });
  });
  $('#link').click(function(){
    var link = "https://example.com"; // Replace this with your link
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(link).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Link copied to clipboard: " + link);
  });
  

  /*these are codes copied in the internet, sir. */