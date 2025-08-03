$(function () {
  $(".y-l-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-l-reviews-list-left",
    nextArrow: ".y-l-reviews-list-right",
  });
});
