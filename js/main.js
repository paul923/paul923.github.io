//Send email
const email_userId = process.env.EMAIL_USERID;
const email_templateId = process.env.EMAIL_TEMPLATEID;
const email_serviceId = process.env.EMAIL_SERVICEID;

(function () {
    emailjs.init(email_userId);
})();


const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {

    var templateParams = {
        name: document.getElementById("form-name").value,
        email: document.getElementById("form-email").value,
        message: document.getElementById("form-message").value
    };

    let validated = validateForm(templateParams);

    if(validated) {
        emailjs.send(email_serviceId, email_templateId, templateParams)
        .then(function (response) {
            // console.log('SUCCESS!', response.status, response.text);
            alert("Message sent. I'll get back to you ASAP.");
            document.getElementById("contact-form-email").reset();
        }, function (error) {
            // console.log('FAILED...', error);
            alert("Something went wrong... Please try again later.");
        });
    } else {
        alert("Please fill out the fields.")
    }
});

function validateForm(params) {
    for(let key in params) {
        if(params[key] == null || params[key].trim() === "") {
            return false;
        }
    }
    return true;
}

// Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Projects Section - modal
const projectsModals = document.querySelectorAll(".projects-modal")
const imgCards = document.querySelectorAll(".img-card");
const projectsCloseBtns = document.querySelectorAll(".projects-close-btn");

var projectsModal = function (modalClick) {
    projectsModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projectsModal(i);
    })
})

projectsCloseBtns.forEach((projectsCloseBtn) => {
    projectsCloseBtn.addEventListener("click", () => {
        projectsModals.forEach((projectsModalView) => {
            projectsModalView.classList.remove("active");
        })
    })
})

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
})

// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})

//scroll reveal animation
//Common reveal options to create reveal animations
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2000,
    delay: 50
});

//Target elements, and specify options to create reveal animation
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 400, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .contact-card, .contact-left h2', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.experience-card, .education, .projects .img-card', { delay: 700, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer, .group', { delay: 400, origin: 'top', interval: 200 });