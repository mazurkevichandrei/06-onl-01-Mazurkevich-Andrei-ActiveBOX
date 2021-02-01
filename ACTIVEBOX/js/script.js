$(document).ready(function(){
    $('.clients__slider').slick({
        dots:true,
        // waitForAnimate: false
        speed: 300
    });
})

$(document).ready(function(){
    $('.features__cards__slider').slick({
        slidesToShow:1,
        dots:true,
        // waitForAnimate: false
        speed: 300
    });
    $('.features__cards__slider').slick('setPosition');
})

$(document).ready(function(){
    $('.works__box__slider').slick({
        dots:true,
        // waitForAnimate: false
        speed: 300
    });
    $('.works__box__slider').slick('setPosition');
})

$(document).ready(function(){
    $('.team__cards__slider').slick({
        slidesToShow:1,
        dots:true,
        // waitForAnimate: false
        speed: 300
    });
    $('.team__cards__slider').slick('setPosition');
})

