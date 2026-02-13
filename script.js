document.addEventListener("DOMContentLoaded", () => {
  // 1. Preloader
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1500); // Give it some time to look premium
  });

  // 2. Navigation Scroll Effect
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. Scroll Reveal Animation
  const revealElements = document.querySelectorAll("[data-reveal]");
  const revealOnScroll = () => {
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add("revealed");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load

  // 4. Mobile Menu Toggle (Simplified for now)
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  if (burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }

  // 5. Form Submission Simulation
  const form = document.querySelector(".admission-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button");
      const originalText = btn.innerText;

      btn.innerText = "SENDING INQUIRY...";
      btn.style.opacity = "0.7";
      btn.disabled = true;

      setTimeout(() => {
        btn.innerText = "INQUIRY SENT SUCCESSFULLY";
        btn.style.backgroundColor = "#27ae60";
        form.reset();

        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.backgroundColor = "";
          btn.style.opacity = "1";
          btn.disabled = false;
        }, 3000);
      }, 2000);
    });
  }

  // 6. Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update active link
        document
          .querySelectorAll(".nav-links a")
          .forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
});
