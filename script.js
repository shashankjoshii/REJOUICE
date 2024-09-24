



function cursorEffect() {
    document.addEventListener('DOMContentLoaded', () => {
        const cursor = document.querySelector('#cursor');
        const page1 = document.querySelector('#page1');
    
        
        const updateCursor = (e) => {
            gsap.to(cursor, {
                duration: 0.2,
                x: e.clientX,
                y: e.clientY,
                ease: "power2.out"
            });
        };
    
        document.addEventListener('mousemove', updateCursor);
    
        
        const interactiveElements = document.querySelectorAll('a, button');      
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { 
                    scale: 1.5,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    duration: 0.2 
                });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { 
                    scale: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    duration: 0.2 
                });
            });
        });       
        page1.addEventListener('mouseleave', () => {
            gsap.to(cursor, { 
                scale: 0,
                duration: 0.1 
            });
        });    
        page1.addEventListener('mouseenter', () => {
            gsap.to(cursor, { 
                scale: 1,
                duration: 0.1
            });
        });
    });
}
function animatePage2Text() {
    document.addEventListener('DOMContentLoaded', () => {
        
        gsap.registerPlugin(ScrollTrigger);
        
        const page2TextElements = document.querySelectorAll('#page2 p, #page2 h5');     
        gsap.from(page2TextElements, {
            opacity: 0,
            y: 50,
            duration: 2,
            stagger: 0.3, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#page2', 
                start: "top 80%", 
                end: "bottom 20%", 
                toggleActions: "play reverse play reverse", 
            }
        });
    });
}
function animatePage1() {
    document.addEventListener('DOMContentLoaded', () => {
        gsap.registerPlugin(ScrollTrigger);
        const page1Nav = document.querySelector('#page1 nav');
        const page1Span = document.querySelectorAll('#page1 h1 span' );       
        gsap.from(page1Nav, {
            opacity: 0,
            y: 50, 
            duration: 1,
            ease: "power2.out",
            stagger: 0.3, 
        });       
        gsap.from(page1Span, {
            opacity: 0,
            y: 100, 
            duration: 2,
            ease: "power2.out",
            stagger: 0.1, 
        });
    });
}
function animatePage4Text() {
    document.addEventListener('DOMContentLoaded', () => {
        
        gsap.registerPlugin(ScrollTrigger);
        
        const page4TextElements = document.querySelectorAll('#page4 p, #page4 h5');     
        gsap.from(page4TextElements, {
            opacity: 0,
            y: 50,
            duration: 2,
            stagger: 0.3, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#page4', 
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play reverse play reverse", 
 
            }
        });
    });
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  })
  function animatePage5Text() {
    document.addEventListener('DOMContentLoaded', () => {
        gsap.registerPlugin(ScrollTrigger);
        
        const page5Span = document.querySelectorAll('#footer-bottom h1 span');
        
        
        gsap.from(page5Span, {
            opacity: 0,
            y: -150, 
            duration: 1,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#footer-bottom', 
                start: "top 80%", 
                end: "bottom 20%", 
                toggleActions: "play reverse play reverse", 
            }
        });
    });
}

 
cursorEffect();
animatePage2Text();
animatePage4Text();
animatePage5Text();

animatePage1();

