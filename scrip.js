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

var tl1 = gsap.timeline();
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
document.addEventListener("mousemove",function(dets){
  mfo.style.left = dets.x + 5 + "px"
  mfo.style.top = dets.y + 5 + "px"
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
      start:"top 15%",
      scrub:2,
      end:"top 0",
    }
});

tl2.to(".page1 h1",{
  x:-170,
  duration:1,  
},"anime")
tl2.to(".page1 h2",{
  x:150,
  duration:1, 
},"anime")
tl2.to("#himg #title,#himg img",{
  width:"90vw",
  duration:2
},"anime")



var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers:true,
    start: "top -48%",
    end: "top -53%",
    scrub: 3
  }
})
tl2.to(".main", {
  backgroundColor: "#fff",
},"a")
tl2.to("#text-right button", {
  backgroundColor: "#EDBFFF",
},"a")



var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -150%",
    end: "top -165%",
    scrub: 5
  }
})
tl3.to(".main",{
  backgroundColor:"#0F0D0D"
},"a")
tl3.to("#text-left h2,#text-right p,.page3 h1,#left h5,#left span,#right h5,#right span,.work-list h2", {
  color: "#ffffff",
},"a")



var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      var att = elem.getAttribute("data-image")
      console.log(att)
      mfo.style.width = "30vw"
      mfo.style.height = "30vh"
      mfo.style.border = "1.5px solid white"
      mfo.style.borderRadius = "0"
      mfo.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function(){
      var att = elem.getAttribute("data-image")
      console.log(att)
      mfo.style.width = "20px"
      mfo.style.height = "20px"
      mfo.style.borderRadius = "50%"
      mfo.style.backgroundImage = `none`
    })
})

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -300%",
    end: "top -310%",
    scrub: 3
  }
})
tl4.from("footer",{
  opacity:0,
  duration:6,
})

var nev_a = document.querySelectorAll(".nav-2 a")
var nev_a2 = document.querySelector(".nav-3 a")
var purple = document.querySelector(".menu-eff")
var a = document.querySelectorAll(".menu-eff h1")
nev_a.forEach(function(elem){

  elem.addEventListener("mouseenter",function(){
    purple.style.opacity="1",
    purple.style.display="block",
    a.forEach(function(tx){
      tx.innerHTML=elem.innerText
    })
  })
  elem.addEventListener("mouseleave",function(){
    purple.style.opacity="0",
    purple.style.display="none"
  })
}) 

nev_a2.addEventListener("mouseenter",function(){
  purple.style.opacity="1",
  purple.style.display="block",
  a.forEach(function(tx){
    tx.innerHTML="DuoStudio"
  })
})
nev_a2.addEventListener("mouseleave",function(){
  purple.style.opacity="0",
  purple.style.display="none"
})



