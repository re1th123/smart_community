var action = gsap.timeline({
  repeat:-1, repeatDelay:3
}) 
.to("#streetlight", {
  filter: 'brightness(1)', 
  duration:0.07,
  ease:'none',
  repeat:6, yoyo:true
})
gsap.to("#streetlight", {
  x:100,
  duration:8, ease:'none',
  repeat:-1, yoyo:true
},0)












gsap.set("#rat", {rotation:45, scale:1.3, transformOrigin:'center'});

var ww = $(window).width();

var rat = gsap.to("#rat", {
  x:ww*0.6, y:-50, 
  duration:8, ease: 'bounce.inOut',
  repeat:15
})