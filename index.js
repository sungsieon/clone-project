

const contentImg = document.querySelectorAll(".content_Img_Box");
const section = document.querySelector('.scroll-fixed');
const mainText = document.querySelector('.main-text');


const hoverScale = () => {
    contentImg.forEach((img, index) => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scaleY(1.5)";

        if(contentImg[index - 1]){
            contentImg[index - 1].style.transform = "scaleY(1.2)";
         }
    
         if(contentImg[index + 1]){
            contentImg[index + 1].style.transform = "scaleY(1.2)";
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


function handleScroll() {
   const section = document.querySelector(".scrollImg_container");
   const position = document.querySelector(".scrollImg_position");
 
   if (!section || !position) return;
 
   const sectionTop = section.offsetTop;
   const sectionHeight = section.offsetHeight;
   const scrollY = window.scrollY;
 
   const scrollRatio = Math.min(
     Math.max((scrollY - sectionTop) / (sectionHeight - window.innerHeight), 0),
     1
   );
 
   position.style.transform = `translateX(${30 - scrollRatio * 80}vw)`;
 }
 
 function toggleScrollEvent() {
   if (window.innerWidth >= 748) {
     window.addEventListener("scroll", handleScroll);
   } else {
     window.removeEventListener("scroll", handleScroll);
   }
 }
 
 document.addEventListener("DOMContentLoaded", () => {
   toggleScrollEvent();
 });
 
 window.addEventListener("resize", () => {
   toggleScrollEvent();
   handleScroll();
 });
 //---------------------------------------------------------------------


 window.addEventListener('scroll',() => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;

    const fixedReleasePoint = sectionTop + 700;

    if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight){
      if (scrollY >= fixedReleasePoint) {
        mainText.classList.remove('fixed'); // release point 넘으면 fixed 풀림
        mainText.classList.add("released")
      } else {
        mainText.classList.add('fixed'); // release point 이전이면 fixed 걸림
        mainText.classList.remove("released");
      }
    } else {
      mainText.classList.remove('fixed');
      mainText.classList.remove("released");
  }
    }
 )