// 1. Efek Navbar saat di-Scroll dengan perubahan warna gradual
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar.style.background = "#ffffff";
    navbar.style.padding = "0.5rem 0";
    navbar.style.boxShadow = `0 2px 10px rgba(0,0,0,${Math.min(
      scrollY / 500,
      0.15
    )})`;
  } else {
    navbar.style.background = "#ffffff";
    navbar.style.padding = "1rem 0";
    navbar.style.boxShadow = "none";
  }
});

// 2. Smooth Scrolling untuk link navigasi dengan highlight aktif
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Highlight link aktif
      document.querySelectorAll(".nav-links li a").forEach((link) => {
        link.style.color = "";
      });
      this.style.color = "var(--primary-color)";
    }
  });
});

// 3. Animasi saat elemen masuk ke viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `slideInUp 0.6s ease forwards`;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe semua feature card dan product item
document
  .querySelectorAll(".feature-card, .product-item, .step")
  .forEach((el) => {
    observer.observe(el);
  });

// 4. Efek Tombol WhatsApp dengan animasi pulse
const waButton = document.querySelector(".floating-wa");
waButton.addEventListener("click", () => {
  waButton.style.animation = "none";
  setTimeout(() => {
    waButton.style.animation = "float 3s ease-in-out infinite";
  }, 10);
});

// 5. Tambahan Interaktif: Text Hover pada Product Card
document.querySelectorAll(".product-item").forEach((item) => {
  item.addEventListener("click", function () {
    const title = this.querySelector("h4").textContent;
    console.log("Produk dipilih:", title);
  });
});

// 6. Animasi counter untuk informasi
function animateCounter(element, target, duration = 1000) {
  let current = 0;
  const increment = target / (duration / 16);
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// 7. Auto-scroll ke section dengan highlight
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// 8. Feedback pesan di console
console.log("🥬 Website IntinyaSayur aktif dan siap melayani!");
