

const contentImg = document.querySelectorAll(".content_Img_Box");
const section = document.querySelector('.scroll-fixed');
const mainText = document.querySelector('.main-text');
const videoSpans = document.querySelectorAll('.video-btn span');



const hoverScale = () => {
    contentImg.forEach((img, index) => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scaleY(1.3)";

        if(contentImg[index - 1]){
            contentImg[index - 1].style.transform = "scaleY(1.1)";
         }
    
         if(contentImg[index + 1]){
            contentImg[index + 1].style.transform = "scaleY(1.1)";
         }
        
      })
     img.addEventListener("mouseleave", () => {
        img.style.transform = "scaleY(1)";

        if(contentImg[index - 1]){
            contentImg[index - 1].style.transform = "scaleY(1)";
         }
    
         if(contentImg[index + 1]){
            contentImg[index + 1].style.transform = "scaleY(1)";
         }

     })
      
    })
}

hoverScale();
//---------------------------------------------------------------------

 //---------------------------------------------------------------------


 window.addEventListener('scroll',() => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;

    const fixedReleasePoint = sectionTop + 600;

    if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight){
      if (scrollY >= fixedReleasePoint) {
        mainText.classList.remove('fixed'); 
        mainText.classList.add("released")
      } else {
        mainText.classList.add('fixed'); 
        mainText.classList.remove("released");
      }
    } else {
      mainText.classList.remove('fixed');
      mainText.classList.remove("released");
  }
    }
 )




 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 1
});


const images = document.querySelectorAll('.scroll-inner-Box img');
images.forEach(img => observer.observe(img));



videoSpans.forEach((span) => {
  span.addEventListener("click", () => {
    videoSpans.forEach(s => s.classList.remove("active"));
    span.classList.add("active");
  })
})

//--------------------------------------------------------------------
const $spans = $('.video-btn span');
const $containers = $('.video-container');

$spans.each(function(index){
  $(this).on('click',function(){

    $spans.removeClass('active');
    $(this).addClass('active');

    $containers.removeClass('show');
    $containers.eq(index).addClass('show');
  })
})

//--------------------------------------------------

const boxes = document.querySelectorAll('.last-Box2, .last-Box3');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bottomMove');
      observer2.unobserve(entry.target); // 한 번만 실행
    }
  });
}, {
  threshold: 0.2 // 20% 이상 보이면 실행
});

boxes.forEach(box => observer2.observe(box));