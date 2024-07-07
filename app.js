function toggleMenu() {
    let menuLinks = document.querySelectorAll('.navbar a');
    let mobileHeading = document.getElementById('mobile-heading');

    // Toggle active class on menu links
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.toggle('active');
    }

    // Toggle heading in mobile-heading div
    mobileHeading.classList.toggle('active');
}
