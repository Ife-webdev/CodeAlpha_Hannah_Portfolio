// ========================================
// MOBILE NAVIGATION
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile menu when a navigation link
// is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ========================================
// SCROLL REVEAL
// ========================================

const animatedElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .experience-item, .education-card"
    );


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach((element) => {

    observer.observe(element);

});