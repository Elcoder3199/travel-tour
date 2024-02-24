
// ------ about page swiper reviews section

let swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    grapCursor: true,
    autoHeight: true,
    // Navigation arrows
    breakpoints: {
      640: {
        slidesPreView: 1,
      },
      768: {
        slidesPreView: 2,
      },
      1024: {
        slidesPreView: 4,
      },
    },
  });
  
  