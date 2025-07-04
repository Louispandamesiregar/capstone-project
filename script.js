// Pilih elemen hamburger dan menu navigasi dari dokumen
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Tambahkan 'event listener' untuk klik pada hamburger
hamburger.addEventListener("click", () => {
    // Toggle class 'active' pada hamburger (untuk animasi 'X')
    hamburger.classList.toggle("active");
    // Toggle class '
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- Kode untuk Efek Mengetik ---

// Pastikan script ini berjalan setelah seluruh halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Web Developer", "UI/UX Enthusiast", "Tech Blogger"], // Teks yang akan ditampilkan
        typeSpeed: 50,  // Kecepatan mengetik
        backSpeed: 25,  // Kecepatan menghapus
        loop: true      // Mengulang terus menerus
    };

    // Inisialisasi Typed.js pada elemen span kita
    var typed = new Typed(".typing-text", options);
});
// --- Kode untuk Animasi Scroll Reveal ---

// Pastikan script ini berjalan setelah seluruh halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const sr = ScrollReveal({
        distance: '60px', // Jarak elemen bergerak
        duration: 2500,   // Durasi animasi
        delay: 400,
        reset: true       // Animasikan ulang setiap kali scroll
    });

    // Animasikan elemen di Hero Section
    sr.reveal('.hero-text', { origin: 'left' });
    sr.reveal('.hero-image', { origin: 'right' });

    // Animasikan elemen di About Section
    sr.reveal('.about-image', { origin: 'left' });
    sr.reveal('.about-text', { origin: 'right' });

    // Animasikan judul
    sr.reveal('.projects-container h2', { origin: 'top' });
    sr.reveal('.contact h2', { origin: 'top' });
    
    // Animasikan kartu proyek dengan interval
    sr.reveal('.project-card', { origin: 'bottom', interval: 200 });

    // Animasikan ikon media sosial
    sr.reveal('.contact-socials a', { origin: 'bottom', interval: 200 });
});
// --- Kode untuk mengubah Navbar saat scroll ---
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    // Jika posisi scroll lebih besar dari 50px
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// --- Kode untuk membuat kartu proyek bisa diklik ---
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        // Cari link 'Live Demo' di dalam kartu yang diklik
        const liveDemoLink = card.querySelector('.link-demo');
        if (liveDemoLink) {
            // Buka link di tab baru
            window.open(liveDemoLink.href, '_blank');
        }
    });
});