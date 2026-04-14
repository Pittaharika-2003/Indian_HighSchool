// Cinematic fade-in on load
window.addEventListener("load", () => {
  const content = document.querySelector(".hero-content");

  setTimeout(() => {
    content.classList.add("active");
  }, 300);
});

// Scroll animation for About section
const aboutSection = document.querySelector(".about-content");

window.addEventListener("scroll", () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    aboutSection.classList.add("active");
  }
});
// Facilities animation on scroll
const cards = document.querySelectorAll(".facility-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});
// Academics animation
const academicCards = document.querySelectorAll(".academic-card");

window.addEventListener("scroll", () => {
  academicCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});
// Why Choose Us animation
const whyText = document.querySelector(".why-text");

window.addEventListener("scroll", () => {
  const top = whyText.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    whyText.classList.add("active");
  }
});
// Contact form animation
const contactForm = document.querySelector(".contact-form");

window.addEventListener("scroll", () => {
  const top = contactForm.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    contactForm.classList.add("active");
  }
});
// Navbar scroll effect
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function openPage(page) {
  window.location.href = page;
}

function toggleButton(e, clickedBtn) {

  // Allow redirect only for map button
  if (!clickedBtn.classList.contains('map-btn')) {
    e.preventDefault();
  }

  // Toggle active
  if (clickedBtn.classList.contains('active')) {
    clickedBtn.classList.remove('active');
    return;
  }

  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.remove('active');
  });

  clickedBtn.classList.add('active');
}

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop default redirect

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      successMessage.style.display = "block";

      // redirect after 3 seconds
      setTimeout(() => {
        window.location.href = "#home"; // OR your full link
        // window.location.href = "https://pioneer-highschool.vercel.app/";
      }, 3000);
    } else {
      alert("Something went wrong!");
    }
  })
  .catch(() => {
    alert("Error submitting form");
  });
});
