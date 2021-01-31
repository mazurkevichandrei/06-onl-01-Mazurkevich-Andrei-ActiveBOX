$(document).ready(function(){
    $('.clients__slider').slick({
        dots:true
    });
})

$(document).ready(function(){
    $('.features__cards__slider').slick({
        slidesToShow:1,
        dots:true,
    });
    $('.features__cards__slider').slick('setPosition');
})

$(document).ready(function(){
    $('.works__box__slider').slick({
        dots:true,
    });
    $('.works__box__slider').slick('setPosition');
})

$(document).ready(function(){
    $('.team__cards__slider').slick({
        slidesToShow:1,
        dots:true,
    });
    $('.team__cards__slider').slick('setPosition');
})

