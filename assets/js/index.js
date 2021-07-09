$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var gato = this.hash;

    $("html").animate(
      {
      scrollTop: $(gato).offset().top - 86,
    },
    800
    );
  });
});


  $(document).ready(function() {
    $('.carousel').carousel({interval: 5000});
  });
