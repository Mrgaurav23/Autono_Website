var cursorElement = document.querySelector("#cursor");
var cursorBlurElement = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cursorElement.style.left = dets.x + 30 + "px";
    cursorElement.style.top = dets.y + "px";
    cursorBlurElement.style.left = dets.x -100 +"px";
    cursorBlurElement.style.top = dets.y -100 + "px";
})

var ankerall = document.querySelectorAll("#navbar ul li a");

ankerall.forEach(function (elem) {
    elem.addEventListener("mouseenter",function(){
        cursorElement.style.scale = 3;
        cursorElement.style.border = "1px solid #000";
        cursorElement.style.backgroundColor = "transparent";
    })
})

ankerall.forEach(function (elem) {
    elem.addEventListener("mouseleave",function(){
        cursorElement.style.scale = 1;
        cursorElement.style.border = "0px solid rgb(42, 97, 145)";
        cursorElement.style.backgroundColor = "rgb(42, 97, 145)";
    })
})

var menu = document.querySelector("#navbar h3");
var full = document.querySelector("#full-scr");
var navspan = document.querySelector("#navbar span");
var flag = 0;
menu.addEventListener("click",function(){
    if (flag == 0) {
        full.style.top = 0;
        navspan.style.opacity = 0;
        flag = 1;
    }
    else{
        full.style.top = "-120%";
        navspan.style.opacity = 1;
        flag = 0;
    }
})

gsap.to("#navbar",{
    backgroundColor : "#fff",
    height: "80px",
    duration : 0.5,
    scrollTrigger:{
        trigger:"#navbar",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:("#main",{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2,
    })
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:"#about-us",
        scroller:"body",
        // markers: true,
        start: "top 50%",
        end: "top 48%",
        scrub: 2,
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger: {
        trigger:".card",
        scroller:"body",
        // markers: true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})