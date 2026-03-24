// ===== Menu mobile =====
document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector('.burger');
    var navLinks = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });

        // Fermer le menu au clic sur un lien
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
            });
        });
    }

    // ===== Lightbox galerie =====
    var lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        var lightboxImg = lightbox.querySelector('img');
        var galleryImages = document.querySelectorAll('.gallery-grid img, .event-gallery img');

        galleryImages.forEach(function (img) {
            img.addEventListener('click', function () {
                lightboxImg.src = this.src;
                lightbox.classList.add('active');
            });
        });

        lightbox.addEventListener('click', function () {
            lightbox.classList.remove('active');
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            }
        });
    }
});
