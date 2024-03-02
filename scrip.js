var tl1 = gsap.timeline();

function init(){
  var x = 0;
  setInterval(function(){
    x = x + Math.floor(Math.random()*10)
    var num = document.querySelector(".loder h1");
    if(x<100){
      num.innerHTML=(x +"%");
    }
    else{
      x = 100;
      num.innerHTML=(x +"%");

    }
  },150)
}


tl1.to(".loder img",{
  scale:1.5,
  duration:1,
  onStart:init()
})

tl1.to(".loder",{
  y:-1000,
  duration:1
})


var mfo = document.querySelector(".mousefolo")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
  mfo.style.left = dets.x + "px"
  mfo.style.top = dets.y + "px"
})











function init() {
    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      smoothMobile: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });    
   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   
   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
   ScrollTrigger.refresh();

}

init()

gsap.from(".page1 .intro",{
    opacity:0,
    duration:3,
    delay:0.2,
    ease: Expo.isInOut
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 20%",
        scrub:2,
        end:"top 0",
        // markers:true,
       
    }
});


tl2.to(".page1 h1",{
    x:-100,
    duration:1,
    
},"anime")
tl2.to(".page1 h2",{
    x:100,
    duration:1, 
    
},"anime")


tl2.to("#himg #title,#himg img",{
    width:"90vw",
},"anime")




var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 3
  }
})
tl2.to(".main", {
  backgroundColor: "#fff",
},"a")
tl2.to("#text-right button", {
  backgroundColor: "#EDBFFF",
},"a")