$(document).ready(function(){
    $('.list__card-video').click(function(){
        let main = $(this).parent();
        $(".list__popap").show();
        console.log(main);
        let data = $("img", main).attr("src");
        console.log(data);
        console.log(data.slice(27, 38));
        let dataURL = data.slice(27, 38);
        let newURL = 'https://www.youtube.com/embed/' + dataURL;

        console.log(newURL);
        $('iframe','.list__popap-video').attr("src", newURL); 
        console.log($('iframe','.list__popap-video').attr('src') )
    })

    $('.list__popap-close').click(function(){
        $(".list__popap").hide();
    })

    $('.list__subtitle-past').click(function(){
        $(".list__image-cards").show();
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


});