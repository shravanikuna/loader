
// document.getElementById("#imgl1").style.transform="translateX(50deg)"

// const circle1= document.querySelector(".imgr1")
// const circle2= document.querySelector(".imgr2")
// const circle3= document.querySelector(".imgl1")
// const circle4= document.querySelector(".imgl2")
// const content = document.querySelector(".gallery")
// console.log(content.getBoundingClientRect().width)


// const vedalpu = content.getBoundingClientRect().width;
// const neluvu = content.getBoundingClientRect().height;

// circle1.style.transform =`translate(${-(dets.x-(vedalpu/2))/(vedalpu/100)}%,${-(((dets.y-348)-(40/2))/(3.62)/2)}%)`
// circle2.style.transform =`translate(${(dets.x-(vedalpu/2))/(vedalpu/100)}%,${(((dets.y-348)-(40/2))/(3.62)/2)}%)`
// circle3.style.transform =`translate(${(dets.x-(vedalpu/2))/(vedalpu/100)}%,${-(((dets.y-348)-(40/2))/(3.62)/2)}%)`
// circle4.style.transform =`translate(${-(dets.x-(vedalpu/2))/(vedalpu/100)}%,${(((dets.y-348)-(40/2))/(3.62)/2)}%)`

var tl = gsap.timeline();
tl.to(".cntr",{
    duration:1.5,
    delay:0.4,
    // y:60
    height: "100%",
})
.to(".imgl1",{
    opacity:1,
    ease:Expo.easeInOut,
    // duration:.8,
    rotate: "5deg",
    left:"52%",
    top: "49%",

})
.to(".imgl2",{
    opacity:1,
    ease:Expo.easeInOut,
    // duration:.8,
    rotate: "6deg",
    left:"54%",
    top: "49%",
})
.to(".imgr1",{
    opacity:1,
    ease:Expo.easeInOut,
    // duration:.8,
    rotate: "8deg",
    left:"56%",
    top: "49%",
}).to(".imgr2",{
    opacity:1,
    ease:Expo.easeInOut,
    // duration:.8,
    rotate: "10deg",
    left:"58%",
    top: "49%",
})
.to(".imgl1, .imgl2,.imgr1, .imgr2",{
    ease:Expo.easeInOut,
    // duration:.8,
    rotate: "21deg",
    left:"76%",
    top: "60%",
})
.to(".imgl2, .imgr1, .imgr2",{
    ease:Expo.easeInOut,
    // duration:.8,
    rotate: "35deg",
    left:"98%",
    top: "85%",
})
.to(".imgr2, .imgr1",{
    ease:Expo.easeInOut,
    // duration:.8,
    rotate: "120deg",
    left:"112%",
    top: "175%",
})
.to(".imgr2, .imgr1",{
    ease: Power3.easeInOut,
    // duration:.8,
    left:"55%",
    rotate: "180deg",
    top: "160%",
})
.to(".imgr2,.imgr1",{
    ease: Power3.easeInOut,
    duration:.1,
    left:"-3%",
    rotate: "260deg",
    top: "140%",
})
.to(".imgr2,.imgr1",{
    ease:Expo.easeInOut,
    duration:.1,
    left:"2%",
    rotate: "320deg",
    top: "86%",
})
.to(".imgr2",{
    ease:Expo.easeInOut,
    duration:.8,
    left:"24%",
    rotate: "339deg",
    top: "60%",
})
