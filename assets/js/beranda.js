 // Get the modal 1
 var modal1 = document.getElementById('myModal1');

 // Get the button that opens the modal 1
 var btn1 = document.getElementById("openModalBtn1");

 // Get the <span> element that closes the modal
 var span1 = modal1.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 1
 btn1.onclick = function() {
     modal1.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span1.onclick = function() {
     modal1.style.display = "none";
 }

 // Get the modal 2
 var modal2 = document.getElementById('myModal2');

 // Get the button that opens the modal 2
 var btn2 = document.getElementById("openModalBtn2");

 // Get the <span> element that closes the modal
 var span2 = modal2.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 2
 btn2.onclick = function() {
     modal2.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span2.onclick = function() {
     modal2.style.display = "none";
 }

 // Get the modal 3
 var modal3 = document.getElementById('myModal3');

 // Get the button that opens the modal 3
 var btn3 = document.getElementById("openModalBtn3");

 // Get the <span> element that closes the modal
 var span3 = modal3.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 3
 btn3.onclick = function() {
     modal3.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span3.onclick = function() {
     modal3.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal1) {
         modal1.style.display = "none";
     }
     if (event.target == modal2) {
         modal2.style.display = "none";
     }
     if (event.target == modal3) {
         modal3.style.display = "none";
     }
 }
 // Function to open modal and disable scrolling
 function openModal(modal) {
    // Save current scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;
    modal.style.display = "block";
    // Fix body position
    document.body.style.position = "fixed";
    // Set top position to prevent page from scrolling
    document.body.style.top = `-${scrollPosition}px`;
}

// Function to close modal and enable scrolling
function closeModal(modal) {
    modal.style.display = "none";
    // Reset body position
    document.body.style.position = "";
    // Restore scroll position
    var scrollPosition = Math.abs(parseInt(document.body.style.top || '0'));
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
}

// Get the modal 1
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal 1
var btn1 = document.getElementById("openModalBtn1");

// Get the <span> element that closes the modal
var span1 = modal1.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 1
btn1.onclick = function() {
    openModal(modal1);
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    closeModal(modal1);
}

// Get the modal 2
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal 2
var btn2 = document.getElementById("openModalBtn2");

// Get the <span> element that closes the modal
var span2 = modal2.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 2
btn2.onclick = function() {
    openModal(modal2);
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    closeModal(modal2);
}

// Get the modal 3
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal 3
var btn3 = document.getElementById("openModalBtn3");

// Get the <span> element that closes the modal
var span3 = modal3.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 3
btn3.onclick = function() {
    openModal(modal3);
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    closeModal(modal3);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        closeModal(modal1);
    }
    if (event.target == modal2) {
        closeModal(modal2);
    }
    if (event.target == modal3) {
        closeModal(modal3);
    }
}


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
$(document).ready(function(){
    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $(window).scroll(function () {
        if ($(this).scrollTop() > navHeight) {
            nav.addClass('navbar-fixed');
            // Tambahkan class 'navbar-scrolled' untuk efek saat di-scroll
            nav.addClass('navbar-scrolled');
        } else {
            nav.removeClass('navbar-fixed');
            // Hapus class 'navbar-scrolled' saat tidak di-scroll
            nav.removeClass('navbar-scrolled');
        }
    });
});