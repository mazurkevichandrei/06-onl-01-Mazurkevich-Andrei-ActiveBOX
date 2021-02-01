$(document).ready(function(){
    $('.clients__slider').slick({
        dots:true,
        waitForAnimate: false
    });
})

$(document).ready(function(){
    $('.features__cards__slider').slick({
        slidesToShow:1,
        dots:true,
        waitForAnimate: false
    });
    $('.features__cards__slider').slick('setPosition');
})

$(document).ready(function(){
    $('.works__box__slider').slick({
        dots:true,
        waitForAnimate: false
    });
    $('.works__box__slider').slick('setPosition');
})

$(document).ready(function(){
    $('.team__cards__slider').slick({
        slidesToShow:1,
        dots:true,
        waitForAnimate: false
    });
    $('.team__cards__slider').slick('setPosition');
})

