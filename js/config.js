/**
 * Petal & Pinecraft — site and product configuration
 *
 * Update contact details and product listings here.
 * Prices are in Indian Rupees (INR). Change a product's `price` number to update the site.
 *
 * Image mapping (original files in /images):
 * - logo.jpeg → brand logo
 * - Pastel Oh Baby Candle Still Life.png → Oh Baby Celebration Candle
 * - Petal & Pinecraft Rose Candle.png → Blooming Rose Candle
 * - Pastel Bubble Candle Still Life.png → Pastel Bubble Candle
 * - Romantic Pink Flower Candle Still Life.png → Blush Bloom Jar Candle
 */
(function (global) {
  var SITE = {
    name: "Petal & Pinecraft",
    byline: "by Neha",
    email: "petalandpinecraft@gmail.com",
    instagramUrl: "https://www.instagram.com/petalandpinecraft/",
    instagramHandle: "petalandpinecraft",
    domain: "https://petalandpinecraft.in",
    phones: [
      { display: "+91 7028430666", e164: "917028430666", primary: true },
      { display: "+91 6362651307", e164: "916362651307", primary: false },
    ],
    whatsappDefaultMessage:
      "Hi Petal & Pinecraft! I am interested in your handmade products. Could you please share the details?",
    emailSubject: "Enquiry from Petal & Pinecraft website",
    emailBody:
      "Hi Petal & Pinecraft,\n\nI would like to enquire about your handmade products.\n\nThank you.",
  };

  var PRODUCTS = {
    candles: [
      {
        id: "oh-baby",
        name: "Oh Baby Celebration Candle",
        price: 599,
        image: "images/Pastel Oh Baby Candle Still Life.png",
        alt: "Handmade Oh Baby jar candle with pink and blue baby footprints, pastel ribbon, and a Petal & Pinecraft tag",
        description:
          "A keepsake jar candle with tiny pink and blue footprints, baby’s-breath details, and a pastel ribbon — made for showers, welcomes, and first celebrations.",
        featured: true,
      },
      {
        id: "blooming-rose",
        name: "Blooming Rose Candle",
        price: 649,
        image: "images/Petal & Pinecraft Rose Candle.png",
        alt: "Handmade rose-topped jar candle with pink ribbon, petals, and a Petal & Pinecraft tag",
        description:
          "A sculpted blush rose rests on a creamy pour, finished with petals, baby’s breath, and a satin bow. A romantic gift for birthdays and quiet evenings.",
        featured: true,
      },
      {
        id: "pastel-bubble",
        name: "Pastel Bubble Candle",
        price: 449,
        image: "images/Pastel Bubble Candle Still Life.png",
        alt: "Handmade pastel bubble candle stacked in baby blue and blush pink spheres",
        description:
          "A playful bubble form in baby blue and blush — a sculptural accent for shelves, dressing tables, and thoughtful little gifts.",
        featured: true,
      },
      {
        id: "blush-bloom",
        name: "Blush Bloom Jar Candle",
        price: 579,
        image: "images/Romantic Pink Flower Candle Still Life.png",
        alt: "Handmade jar candle with a pink flower top, cream wax, and a sparkling blush gel base",
        description:
          "A blooming flower sits above a cream pour and a sparkling blush base. Soft, romantic, and made to glow on a bedside or dining table.",
        featured: true,
      },
    ],
    "pipe-cleaner": [],
    resin: [],
    floral: [],
    "home-decor": [],
  };

  function primaryPhone() {
    var found = SITE.phones.filter(function (p) {
      return p.primary;
    })[0];
    return found || SITE.phones[0];
  }

  function waLink(message) {
    var text = message || SITE.whatsappDefaultMessage;
    return "https://wa.me/" + primaryPhone().e164 + "?text=" + encodeURIComponent(text);
  }

  function productWaLink(productName) {
    return waLink(
      "Hi Petal & Pinecraft! I am interested in the " +
        productName +
        ". Could you please share the details?"
    );
  }

  function mailtoLink() {
    return (
      "mailto:" +
      SITE.email +
      "?subject=" +
      encodeURIComponent(SITE.emailSubject) +
      "&body=" +
      encodeURIComponent(SITE.emailBody)
    );
  }

  function formatPrice(amount) {
    if (amount == null || amount === "") return "";
    return "₹" + Number(amount).toLocaleString("en-IN");
  }

  global.PP = {
    SITE: SITE,
    PRODUCTS: PRODUCTS,
    primaryPhone: primaryPhone,
    waLink: waLink,
    productWaLink: productWaLink,
    mailtoLink: mailtoLink,
    formatPrice: formatPrice,
  };
})(window);
