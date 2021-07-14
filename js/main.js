$(function () {

  $('.header__button').on('click', function () {
  $('.menu').toggleClass('menu--visible');
  $('.header__phone').toggleClass('header__phone--visible');
  })

  $('.cards-item__heart').on('click', function(){
  $(this).toggleClass('cards-item__heart--active')
});


  $('.menu__list-link').on('click', function () {
  $('.menu').removeClass('menu--visible');
  $('.header__phone').removeClass('header__phone--visible');
});

$('.reviews-wrapper').slick({
  slidesToShow: 2,
  prevArrow: ' <button class="reviews__btn reviews__btn-prev"><img src="images/arrow-left.svg"alt="arrow"/></button>',
  nextArrow: ' <button class="reviews__btn reviews__btn-next"><img src="images/arrow-right.svg"alt="arrow"/></button>',
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

})