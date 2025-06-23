
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}




document.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const target = document.getElementById(targetId);
        console.log(targetId, target);

        // close all
        document.querySelectorAll('.desc-active').forEach(panel => {
            if (panel.id !== targetId) panel.classList.remove('desc-active');
        });
        document.querySelectorAll('#image-ctn').forEach(img => {
            img.src = `resources/${targetId}.svg`
        });

        // toggle current
        target.classList.toggle('desc-active');

        // rotate arrows
        document.querySelectorAll(' .arrow').forEach(arrow => {
            arrow.style.transform = 'rotate(0deg)';
        });
        if (target.classList.contains('desc-active')) {
            btn.querySelector('.arrow').style.transform = 'rotate(180deg)';
        }
    });
});



const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    if(window.scrollY<50){
    window.scrollY=50;
    }
    navLinks.classList.toggle('show');
});

// Optional: Close menu when clicking a link (for SPA UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
});
