// Fungsi untuk menampilkan modal
// Mendapatkan elemen-elemen yang diperlukan
var modal = document.getElementById('myModal');
var openBtn1 = document.getElementById("openModalBtn1");
var openBtn2 = document.getElementById("openModalBtn2");
var openBtn3 = document.getElementById("openModalBtn3");
var closeBtn = document.getElementsByClassName("close")[0];

// Fungsi untuk membuka modal saat tombol diklik
openBtn1.onclick = function(event) {
    event.preventDefault(); // Menghentikan tindakan default
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Mencegah scroll pada latar belakang modal
}

openBtn2.onclick = function(event) {
    event.preventDefault(); // Menghentikan tindakan default
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Mencegah scroll pada latar belakang modal
}

openBtn3.onclick = function(event) {
    event.preventDefault(); // Menghentikan tindakan default
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Mencegah scroll pada latar belakang modal
}

// Fungsi untuk menutup modal saat tombol tutup diklik
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Mengembalikan scroll pada latar belakang modal
}

// Fungsi untuk menutup modal saat klik di luar modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Mengembalikan scroll pada latar belakang modal
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