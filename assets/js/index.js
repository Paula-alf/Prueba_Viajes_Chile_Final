//Movimiento scroll lento página//
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

//carrusel intervalo//
  $(document).ready(function() {
    $('.carousel').carousel({interval: 5000});
  });



  $('[data-toggle="tooltip"]').tooltip()
