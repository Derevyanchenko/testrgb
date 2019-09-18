$(document).ready(function() {

  // - При клике на карточку, карточка и кнопка красятся в зелёный, а плюс превращается в минус. При повторном клике всё меняем обратно.

  let 
    card = $(".card");

  card.on("click", function() {
    let that = $(this);

    that.toggleClass("active");

  });

});