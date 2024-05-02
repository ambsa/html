
// card swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop:true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor:'true',
    loopFillGroupWithBlank:true,
    pagination:{
    el:".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
    },
    navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
    },
    breakpoints:{
    0:{
        slidesPerView:1,
    },
    520:{
        slidesPerView:2,
    },
    950:{
        slidesPerView:3,
    },
    },
    });
 // Fungsi untuk mengarahkan halaman ke atas
 function scrollToTop() {
    // Mendapatkan elemen <body>
    const body = document.body;
    // Mendapatkan elemen <html>
    const html = document.documentElement;

    // Menggunakan animasi scroll smooth (opsional)
    body.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    html.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Memeriksa posisi scroll untuk menampilkan tombol
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Jika pengguna telah melakukan scroll lebih dari 20 piksel dari bagian atas halaman, tombol akan ditampilkan
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        // Jika belum, tombol akan disembunyikan
        scrollToTopBtn.style.display = "none";
    }
}