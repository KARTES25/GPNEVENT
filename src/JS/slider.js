$(document).ready(function(){
    let slides = $(".slaider__item");
    let slidesnav = $(".slaider__nav");
    $('.slaider__btn-next').click(function(){
        let z = $(".slaider__item").index($('.slaider__active'));
        if(z == slides.length - 1){
            $(slides[z]).removeClass('slaider__active');
            $(slides[0]).addClass('slaider__active');
            $(slidesnav[z]).removeClass('slaider__nav-active');
            $(slidesnav[0]).addClass('slaider__nav-active');
        }else{
            $(slides[z]).removeClass('slaider__active');
            $(slides[z+1]).addClass('slaider__active');
            $(slidesnav[z]).removeClass('slaider__nav-active');
            $(slidesnav[z+1]).addClass('slaider__nav-active');
        }
    })

    $('.slaider__btn-previous').click(function(){
        let z = $(".slaider__item").index($('.slaider__active'));
        if(z == 0){
            $(slides[z]).removeClass('slaider__active');
            $(slides[slides.length - 1]).addClass('slaider__active');
            $(slidesnav[z]).removeClass('slaider__nav-active');
            $(slidesnav[slides.length - 1]).addClass('slaider__nav-active')
        }else{
            $(slides[z]).removeClass('slaider__active');
            $(slides[z-1]).addClass('slaider__active');
            $(slidesnav[z]).removeClass('slaider__nav-active');
            $(slidesnav[z-1]).addClass('slaider__nav-active')
        }
    })

    $('.slaider__nav').click(function(){
        let indexSlide = $(".slaider__item").index($('.slaider__active'));
        let index = $('.slaider__nav').index($(this));
        $(slides[indexSlide]).removeClass('slaider__active');
        $(slides[index]).addClass('slaider__active');
        $(slidesnav[indexSlide]).removeClass('slaider__nav-active');
        $(this).addClass('slaider__nav-active')
    })
});