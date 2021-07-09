$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var moviendo = this.hash;

    $("html").animate(
      {
      scrollTop: $(moviendo).offset().top - 86,
    },
    800
    );
  });
});


  $(document).ready(function() {
    $('.carousel').carousel({interval: 5000});
  });
