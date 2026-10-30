const horizontal = document.querySelector("#port");
const horsection = gsap.utils.toArray(".port_item");

gsap.to(horsection, {
    xPercent: -100 * (horsection.length - 1),
    ease: "none",

    scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: "+=3000",

        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        markers: true,
    },
});
