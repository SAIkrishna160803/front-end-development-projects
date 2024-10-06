var tl = gsap.timeline()

tl.from("nav h2, nav h4 , .part3",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.25,

})

tl.from(".text",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.25,
    

})

