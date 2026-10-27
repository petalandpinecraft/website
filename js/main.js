(function () {
  document.documentElement.classList.add("js");

  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        document.body.classList.remove("nav-open");
      });
    });
  }

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var product = el.getAttribute("data-wa");
    if (!window.PP) return;
    el.setAttribute("href", product ? PP.productWaLink(product) : PP.waLink());
  });

  document.querySelectorAll("[data-mail]").forEach(function (el) {
    if (!window.PP) return;
    el.setAttribute("href", PP.mailtoLink());
  });

  function renderGallery(container) {
    if (!container || !window.PP) return;
    var key = container.getAttribute("data-gallery");
    var items = PP.PRODUCTS[key] || [];
    if (!items.length) return;

    container.classList.remove("empty-gallery");
    container.classList.add("product-grid");
    container.innerHTML = items
      .map(function (product) {
        return (
          '<article class="product-card reveal">' +
          '<div class="product-media">' +
          '<img src="' +
          encodeURI(product.image) +
          '" alt="' +
          escapeHtml(product.alt) +
          '" loading="lazy" width="800" height="800">' +
          "</div>" +
          '<div class="product-body">' +
          "<h3>" +
          escapeHtml(product.name) +
          "</h3>" +
          "<p>" +
          escapeHtml(product.description) +
          "</p>" +
          '<div class="product-meta">' +
          '<p class="price">' +
          PP.formatPrice(product.price) +
          "</p>" +
          '<a class="btn btn-small" href="' +
          PP.productWaLink(product.name) +
          '" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>' +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderFeatured(container) {
    if (!container || !window.PP) return;
    var featured = (PP.PRODUCTS.candles || []).filter(function (p) {
      return p.featured;
    });
    container.innerHTML = featured
      .map(function (product) {
        return (
          '<article class="product-card reveal">' +
          '<div class="product-media">' +
          '<img src="' +
          encodeURI(product.image) +
          '" alt="' +
          escapeHtml(product.alt) +
          '" loading="lazy" width="800" height="800">' +
          "</div>" +
          '<div class="product-body">' +
          "<h3>" +
          escapeHtml(product.name) +
          "</h3>" +
          '<p class="price">' +
          PP.formatPrice(product.price) +
          "</p>" +
          '<a class="btn btn-small" href="' +
          PP.productWaLink(product.name) +
          '" target="_blank" rel="noopener noreferrer">Enquire</a>' +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  document.querySelectorAll("[data-gallery]").forEach(renderGallery);
  document.querySelectorAll("[data-featured]").forEach(renderFeatured);

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal, .hero-copy, .hero-visual, .nav-cta");

  if (reduceMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach(function (el, index) {
      el.style.transitionDelay = Math.min(index % 6, 5) * 70 + "ms";
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
