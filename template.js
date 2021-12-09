const timeline = gsap.timeline({defaults:{duration : 1}})

timeline
.from('.title',{opacity: 0, x: '-100vw', ease : 'elastic',rotation : 360,fontSize: '15px', stagger : .25})
.from('.yellow', {rotation :720,duration: 10 ,color : 'blue' },'<1')