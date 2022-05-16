const menuButton = document.querySelector('.nav--btn');
const menu = document.querySelector('.header__nav');

menuButton.addEventListener('click', (e)=> {
    e.preventDefault();
    menuButton.classList.toggle('nav--active');
    menu.classList.toggle('header__nav--acetive');

});

$(document).ready(function(){
    $('.about--slider').slick({
        arrows:false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,

    }
    );

    $('.trust--slider').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive:[{
            breakpoint: 540,
            settings:{
                slidesToShow: 1,
            }
        }]
    }
    );
  });

  $('.feedback--slider').slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    responsive:[{
        breakpoint: 540,
        settings:{
            slidesToShow: 1,
        }
    }]
}
);

