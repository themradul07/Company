// Navbar scroll effect
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
        $('nav').addClass('scrolled');
    } else {
        $('nav').removeClass('scrolled');
    }
});

// Slideshow
let slideIndex = 0;
function showSlides() {
    let $slides = $('.mySlides');
    $slides.hide();
    slideIndex++;
    if (slideIndex > $slides.length) { slideIndex = 1; }
    $slides.eq(slideIndex - 1).show();
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();

// Option toggle with arrow rotation and image change
$('.option').on('click', function () {
    const targetId = $(this).data('target');
    const $target = $('#' + targetId);

    // Close all active descriptions
    $('.desc-active').not($target).removeClass('desc-active');

    // Change image source
    $('#image-ctn').attr('src', 'resources/' + targetId + '.svg');

    // Toggle current
    $target.toggleClass('desc-active');

    // Reset all arrow rotations
    $('.arrow').css('transform', 'rotate(0deg)');

    // Rotate arrow of active
    if ($target.hasClass('desc-active')) {
        $(this).find('.arrow').css('transform', 'rotate(180deg)');
    }
});

// Mobile menu toggle
$('#menu-toggle').on('click', function () {
    $('#nav-links').toggleClass('show');
});

// Close menu on link click
$('.nav-links a').on('click', function () {
    $('#nav-links').removeClass('show');
});
