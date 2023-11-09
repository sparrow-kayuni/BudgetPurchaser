define(['jquery', 'scrollAnimations','jqueryValidation', 'bootstrap', 'gsap', 'gsapScrollTrigger', 'lenis'], 

function($, animation, _, _, gsap, gsapScrollTrigger, lenis) {
    // animation.startFeaturesAnimation('Hello'); 

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

});