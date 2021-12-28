// carousel

// Start popup_video
let my_icon = document.querySelectorAll(".play")
$(my_icon).click(function(){
    $(".popup_video iframe").attr('src',$(".popup_video iframe").attr('data-src'))
    $(".popup_video")
    .css({'display':'flex','justify-content':'center','align-items':'center','opacity':'1','top':'0'})
    .children('.box').hide(0).show(2000);

});
$("i.my_icon").click(function(){
    $(".popup_video").css({'display':'none'}).children('.box').hide(0)
    $(".popup_video iframe").attr('src','');
});
// End popup_video

$(document).ready(function(){
  $(".logo").fadeOut(3000);
});



$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

let scroll_top =$('.Scroll-top')
$(window).scroll(function(){
    if($(window).scrollTop() >= 100){
        if(scroll_top.is(':hidden')){
        $(scroll_top).fadeIn(400)
        }
    }else{
        $(scroll_top).fadeOut(400)
    }
})
$(".scroll_top").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
        
    },1000)
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });