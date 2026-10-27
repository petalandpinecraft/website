# Petal & Pinecraft

Static website for **Petal & Pinecraft by Neha** — handmade candles, floral art, resin art, pipe-cleaner creations, and home décor.

The site is HTML, CSS, and vanilla JavaScript. It can be hosted on GitHub Pages and served from the custom domain **petalandpinecraft.in**.

## Preview locally

Open `index.html` in a browser, or from this folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Update products and prices

Edit `js/config.js`.

- Contact numbers, email, Instagram, and the default WhatsApp number live in `SITE`.
- The first phone with `primary: true` is used for WhatsApp click-to-chat.
- Candle products live in `PRODUCTS.candles`. Change `price` (Indian Rupees, number only) to update the listed price.
- To add a candle, copy an existing object and fill in `id`, `name`, `price`, `image`, `alt`, and `description`. Put the photograph in `images/` and keep the original filename in `image`.
- To add products to other categories, append objects to `PRODUCTS["pipe-cleaner"]`, `PRODUCTS.resin`, `PRODUCTS.floral`, or `PRODUCTS["home-decor"]`. Empty galleries stay empty until you add items.

Current candle mapping:

| File | Product | Price |
| --- | --- | --- |
| `images/Pastel Oh Baby Candle Still Life.png` | Oh Baby Celebration Candle | ₹599 |
| `images/Petal & Pinecraft Rose Candle.png` | Blooming Rose Candle | ₹649 |
| `images/Pastel Bubble Candle Still Life.png` | Pastel Bubble Candle | ₹449 |
| `images/Romantic Pink Flower Candle Still Life.png` | Blush Bloom Jar Candle | ₹579 |

Logo: `images/logo.jpeg` (do not crop or redraw).

## GitHub Pages

1. Create a GitHub repository (this project uses `petalandpinecraft`).
2. Push the contents of this folder to the `main` branch.
3. In the repository: **Settings → Pages**.
4. Set source to **Deploy from a branch**, branch **main**, folder **/ (root)**.
5. The `CNAME` file already contains `petalandpinecraft.in`. In Pages settings, confirm the custom domain and enable **Enforce HTTPS** after DNS has propagated (this can take up to 24 hours).

Relative paths are used so the site also works from a project URL such as `https://USERNAME.github.io/petalandpinecraft/`.

## Connect petalandpinecraft.in

At your domain registrar (or DNS host), point the domain at GitHub Pages.

**Apex domain (`petalandpinecraft.in`)** — A records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6 (AAAA): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

**www** — CNAME:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `USERNAME.github.io` |

Replace `USERNAME` with the GitHub account that owns the repository.

After DNS is live, GitHub will issue a TLS certificate. Turn on **Enforce HTTPS** in Pages settings.

## Contact

- Instagram: [petalandpinecraft](https://www.instagram.com/petalandpinecraft/)
- WhatsApp: +91 7028430666 (primary), +91 6362651307
- Email: petalandpinecraft@gmail.com
