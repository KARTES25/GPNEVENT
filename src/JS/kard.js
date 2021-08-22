$(document).ready(function(){
    $(".list__image-cards").hide();
    $('.list__card-video').click(function(){
        let main = $(this).parent();
        $(".list__popap").show();
        let data = $("img", main).attr("src");
        let dataURL = data.slice(27, 38);
        let newURL = 'https://www.youtube.com/embed/' + dataURL;
        $('iframe','.list__popap-video').attr("src", newURL); 
    })

    $('.list__popap-close').click(function(){
        $(".list__popap").hide();
    })

    $('.list__subtitle-past').click(function(){
        $(".list__image-cards").show();
        $('.list__image-cards').addClass('list__image-cards-active');
        $(".list__video-cards").hide();
        $('.list__subtitle-past').removeClass('noActive');
        $('.list__subtitle-actual').addClass('noActive');
    })

    $('.list__subtitle-actual').click(function(){
        $(".list__video-cards").show();
        $(".list__image-cards").hide();
        $('.list__subtitle-past').addClass('noActive');
        $('.list__subtitle-actual').removeClass('noActive');
    })

    $('.list__group-open').click(function(){
        $(".list__popapim").show();
        let main = $(this).parent();
        let main2 = $(".list__popapim-container");
        let data = $("img", main).attr("src");
        console.log(main2)
        $("img",main2).attr("src",data);
        $(".list__group-date",main).clone().appendTo($(".list__group-date",main2 ));
        $(".list__group-tex",main).clone().appendTo($(".list__group-texts",main2 ));
    })

    $('.list__popapim-close').click(function(){
        let main2 = $(".list__popapim-container");
        $(".list__group-date",main2).empty()
        $(".list__group-texts",main2).empty()
        $(".list__popapim").hide();
    })
});