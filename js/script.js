document.addEventListener("DOMContentLoaded", function () {
  /* Mobile navigation toggle */
  var navToggle = document.querySelector(".nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      document.body.classList.toggle("menu-open");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* Sticky navbar shadow on scroll */
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    var onScroll = function () {
      navbar.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Highlight active nav link based on current page */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  /* Auto-mark section headers & common blocks for left/right reveal */
  document.querySelectorAll(".section-header, .filter-bar, .map-wrap, .partners-row").forEach(function (el) {
    if (!el.classList.contains("reveal")) {
      el.classList.add("reveal");
    }
  });

  /* Assign left / right direction to every reveal element */
  var revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach(function (el, index) {
    el.classList.remove("from-left", "from-right");

    var parent = el.parentElement;
    if (parent && (parent.classList.contains("split") || parent.classList.contains("contact-grid") || parent.classList.contains("vm-grid"))) {
      var siblings = parent.querySelectorAll(":scope > .reveal");
      var idx = Array.prototype.indexOf.call(siblings, el);
      el.classList.add(idx % 2 === 0 ? "from-left" : "from-right");
    } else if (parent && parent.classList.contains("grid")) {
      var gridSiblings = parent.querySelectorAll(".reveal");
      var gIdx = Array.prototype.indexOf.call(gridSiblings, el);
      el.classList.add(gIdx % 2 === 0 ? "from-left" : "from-right");
      el.style.transitionDelay = Math.min(gIdx * 0.08, 0.4) + "s";
    } else {
      el.classList.add(index % 2 === 0 ? "from-left" : "from-right");
    }
  });

  /* Scroll + page-load reveal */
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    /* Immediately reveal elements already in the first viewport on page open */
    requestAnimationFrame(function () {
      revealEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Soft page transition when navigating between site pages */
  document.querySelectorAll('a[href$=".html"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (link.target === "_blank") return;
      if (href === currentPage || href === "./" + currentPage) return;

      e.preventDefault();
      document.body.classList.add("page-leaving");

      /* Animate current visible content back out left/right */
      document.querySelectorAll(".reveal.is-visible, .anim-from-left, .anim-from-right").forEach(function (el, i) {
        el.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        el.style.opacity = "0";
        el.style.transform = i % 2 === 0 ? "translateX(-40px)" : "translateX(40px)";
      });

      setTimeout(function () {
        window.location.href = href;
      }, 280);
    });
  });

  /* Portfolio filter with fade */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var portfolioItems = document.querySelectorAll("[data-category]");
  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        var filter = btn.getAttribute("data-filter");
        portfolioItems.forEach(function (item) {
          var match = filter === "all" || item.getAttribute("data-category") === filter;
          if (match) {
            item.style.display = "";
            requestAnimationFrame(function () {
              item.classList.add("is-visible");
            });
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  /* Contact form → WhatsApp */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = (document.getElementById("name").value || "").trim();
      var phone = (document.getElementById("phone").value || "").trim();
      var email = (document.getElementById("email").value || "").trim();
      var subject = (document.getElementById("subject").value || "").trim();
      var message = (document.getElementById("message").value || "").trim();

      var text =
        "Halo ABS, saya ingin meminta penawaran.\n\n" +
        "Nama: " + name + "\n" +
        "No. Telepon/WA: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Kebutuhan: " + subject + "\n\n" +
        "Pesan:\n" + message;

      var waNumber = "628128454929";
      var waUrl = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(text);

      var feedback = document.getElementById("form-feedback");
      if (feedback) {
        feedback.textContent = "Membuka WhatsApp... Silakan kirim pesan yang sudah terisi otomatis.";
        feedback.style.display = "block";
      }

      window.open(waUrl, "_blank");
    });
  }
});
