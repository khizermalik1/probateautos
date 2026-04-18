// Duplicate testimonial track for seamless infinite scroll
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.hpa-testimonial-track');
    if (track) {
        const clone = track.cloneNode(true);
        track.parentNode.appendChild(clone);
    }
});

// --- AUTO-FILL REG FROM URL ---
const regInput = document.getElementById("reg-input");
if (regInput) {
  const params = new URLSearchParams(window.location.search);
  const regFromURL = params.get("reg");
  if (regFromURL) {
    regInput.value = regFromURL.toUpperCase();
  }
}

// --- EMAILJS FORM SUBMISSION ---
const valuationForm = document.getElementById("valuationForm");

if (valuationForm) {
  valuationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (document.querySelector(".hp-field").value !== "") {
      return;
    }

    emailjs.sendForm("service_avg804w", "template_eq109sr", this)
      .then(() => {
        document.getElementById("formStatus").textContent =
          "Thank you — we’ve received your details and will contact you shortly.";
        this.reset();
      })
      .catch(() => {
        document.getElementById("formStatus").textContent =
          "Something went wrong. Please try again.";
      });
  });
}

// --- MOBILE NAV ---
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
