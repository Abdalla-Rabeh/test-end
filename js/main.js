// Initialise Carousel
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    Carousel: {
      fill: true,
      center: true,
    },
  },
});
Fancybox.bind("[data-fancybox-plyr]", {
  on: {
    reveal: (fancybox, slide) => {
      if (typeof Plyr === undefined) {
        return;
      }

      let $el;

      if (slide.type === "html5video") {
        $el = slide.$content.querySelector("video");
      } else if (slide.type === "video") {
        $el = document.createElement("div");
        $el.classList.add("plyr__video-embed");

        $el.appendChild(slide.$iframe);

        slide.$content.appendChild($el);
      }

      if ($el) {
        slide.player = new Plyr($el);
      }
    },
    "Carousel.unselectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.pause();
      }
    },
    "Carousel.selectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.play();
      }
    },
  },
});
// carousel

// Start popup_video
let my_icon = document.querySelectorAll(".play")
$(my_icon).click(function(){
    $(".popup_video iframe").attr('src',$(".popup_video iframe").attr('data-src'))
    $(".popup_video")
    .css({'display':'flex','justify-content':'center','align-items':'center','opacity':'1','top':'0'})
    .children('.box').hide(0).show(3000);

});
$("i.my_icon").click(function(){
    $(".popup_video").css({'display':'none'}).children('.box').hide(0)
    $(".popup_video iframe").attr('src','');
});
// End popup_video

$(document).ready(function(){
  $(".logo").fadeOut(5000);
});



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