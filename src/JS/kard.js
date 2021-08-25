let flag1 = 1;

$(document).ready(function(){
    $(".list__image-cards").hide();
    $('.list__card-video').click(function(){
        let main = $(this).parent();
        let data = $("img", main).attr("src");
        let dataURL = data.slice(27, 38);
        let newURL = 'https://www.youtube.com/embed/' + dataURL;
        $('iframe','.list__popap-video').attr("src", newURL); 
        $(".list__popap").show();
        let x=window.scrollX;
        let y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    })

    $('.list__popap-close').click(function(){
        $(".list__popap").hide();
        window.onscroll=function(){};
    })

    $('.list__subtitle-past').click(function(){
        flag1 = 0;
        $(".list__image-cards").show();
        $(".list__video-cards").hide();
        $('.list__subtitle-past').removeClass('noActive');
        $('.list__subtitle-actual').addClass('noActive');
    })

    $('.list__subtitle-actual').click(function(){
        flag1 = 1;
        $(".list__video-cards").show();
        $(".list__image-cards").hide();
        $('.list__subtitle-past').addClass('noActive');
        $('.list__subtitle-actual').removeClass('noActive');
    })

    $('.list__group-open').click(function(){
        let x=window.scrollX;
        let y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
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
        window.onscroll=function(){};
        let main2 = $(".list__popapim-container");
        $(".list__group-date",main2).empty()
        $(".list__group-texts",main2).empty()
        $(".list__popapim").hide();
    })

    $('.list__more-card').click(function(){
        $('.list__card:nth-child(1n + 7)').show();
        $('.list__more-card').hide();
    })

    $('.list__more-group').click(function(){
        $('.list__group:nth-child(1n + 7)').show();
        $('.list__more-group').hide();
    })

});

function sort1() {
    let nodeList;
    if (flag1 == 1){
       nodeList = $('.list__card');
    }else{
       nodeList = $('.list__group');
    }
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {    
      itemsArray[i] = nodeList[i];
    }
    itemsArray.sort(function(nodeA, nodeB) {
        let textA = nodeA.querySelector('.list__group-date').textContent.slice(0, 10);
        let textB = nodeB.querySelector('.list__group-date').textContent.slice(0, 10);
        let numberA = Date.parse(textA);
        let numberB = Date.parse(textB);
        console.log(Date.parse(textA))
        console.log(textA + ' a ' + textB)
        if (numberA < numberB) return -1;
        if (numberA > numberB) return 1;
        return 0;
      })
      .forEach(function(node) {
        parent.appendChild(node)
      });
}

function sort2() {
    let nodeList;
    if (flag1 == 1){
       nodeList = $('.list__card');
    }else{
       nodeList = $('.list__group');
    }
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {    
      itemsArray[i] = nodeList[i];
    }
    itemsArray.sort(function(nodeA, nodeB) {
        let textA = nodeA.querySelector('.list__group-date').textContent.slice(0, 10);
        let textB = nodeB.querySelector('.list__group-date').textContent.slice(0, 10);
        let numberA = Date.parse(textA);
        let numberB = Date.parse(textB);
        console.log(Date.parse(textA))
        console.log(textA + ' a ' + textB)
        if (numberA < numberB) return 1;
        if (numberA > numberB) return -1;
        return 0;
      })
      .forEach(function(node) {
        parent.appendChild(node)
      });
}