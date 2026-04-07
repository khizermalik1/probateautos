

// Duplicate testimonial track for seamless infinite scroll
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.hpa-testimonial-track');
    if (!track) return;

    const clone = track.cloneNode(true);
    track.parentNode.appendChild(clone);
});

// Valuation Site Form Validation//

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

    // Honeypot check
    if (document.querySelector(".hp-field").value !== "") {
      return; // bot detected
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
} // ← THIS was missing
 
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
