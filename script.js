// gsap.to('.text', {y:100,opacity:0, duration:1);
// gsap.fromTo('.text',{opacity:0,y:100},{opacity:1,y:0,duration:1})
// gsap.fromTo('.text', {opacity:0}, {opacity;1   duration:5});  //from to takes 3 parameters
// gsap.fromTo('.text', {opacity:0,y:100}, {opacity:1,y:0, duration:1});

// timelines allows you to create a sequence of animations that are executed one after the other.

const timelne = gsap.timeline({defaults:{duration:0.75,ease:"power1.out0"}})

timelne.fromTo('.cookie-container',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1.5}),
timelne.fromTo('.cookie',{opacity:0},{opacity:1})
//we have combined both animations time of 0.75 seconds rather than delaying them one by one
// timelne.fromTo('.cookie',{opacity:0, x:-50},{opacity:1,x:0})
timelne.fromTo('.cookie',{opacity:0, x:-50, rotation:'-45deg'},{opacity:1,x:0,rotation:'0deg'}),'<50%'

timelne.fromTo('.text',{x:30, opacity:0},{x:0,opacity:1},'<')

// the < symbol makes the effects all happen at the sametime
// timelne.fromTo('.cookie',{x:30, opacity:0},{x:0,opacity:1},'<')

timelne.fromTo('.cookie',{y:0, rotation:'0deg'},{y:-20,rotation:'-20deg', yoyo:true, repeat:-1})

timelne.fromTo('#',{y:0, rotation:'0deg'},{y:-20,rotation:'-20deg', yoyo:true, repeat:-1})

//fadding the cookie out 
const button = document.querySelector('button');

button.addEventListener('click',() => {
    gsap.fromTo('.cookie-container',{opacity:0, y:100, duration:0.75, ease:'power1.out'})
}) 

