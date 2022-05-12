// 'use strict';
var navToggleClass = ".nk-menu-toggle", navMenuClass = ".nk-nav-menu";
var navToggle = document.querySelector(navToggleClass);
var navMenu = document.querySelector(navMenuClass);

if(navToggle){
	navToggle.addEventListener("click", function () {
		navToggle.classList.toggle('active');
		navMenu.classList.toggle('active');
	});
}

document.addEventListener("click", function (e) {
    if(e.target !== navMenu && e.target !== navToggle && e.target.closest(navMenuClass) === null && e.target.closest(navToggleClass) === null){
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

function mobileNavActive() {
    if (window.innerWidth <= 992) {
		if(navMenu){
			navMenu.classList.add('mobile-nav');
		}
    }
}
mobileNavActive();
window.addEventListener('resize', function () {
    setTimeout(function () {
        mobileNavActive();
    }, 500)
    if (window.innerWidth > 991) {
        navMenu.classList.remove('mobile-nav', 'active');
        navToggle.classList.remove('active');
    }
});

// sticky navbar on scroll down
window.addEventListener("scroll", function () {
	var header = document.querySelector(".header-main");
	header.classList.toggle("sticky", window.scrollY > 0);
 
});

//smooth scroll
// document
// .querySelectorAll('.nk-nav-item a[href^="#"]')
// .forEach(trigger => {
//     trigger.onclick = function(e) {
//         e.preventDefault();
//         let hash = this.getAttribute('href');
//         let target = document.querySelector(hash);
//         let headerOffset =90;
//         let elementPosition = target.offsetTop;
//         let offsetPosition = elementPosition - headerOffset;

//         window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth"
//         });
//     };
// });









