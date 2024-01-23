// Efek smooth scroll untuk tautan navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tampilkan atau sembunyikan menu navigasi responsif
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Tambahkan efek animasi pada elemen saat masuk tampilan
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < window.innerHeight - 50) {
            element.classList.add('animated');
        }
    });
};

// Panggil fungsi animateOnScroll saat menggulir halaman
window.addEventListener('scroll', animateOnScroll);

// Fungsi untuk menyembunyikan menu responsif saat salah satu tautan diklik
const hideMenuOnLinkClick = () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
};

// Panggil fungsi hideMenuOnLinkClick
hideMenuOnLinkClick();