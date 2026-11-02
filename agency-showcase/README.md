# STUDIO — Client Website Demo Collection

Five distinctly art-directed, cinematic, mobile-first demo websites for Greek local businesses, powered by one lightweight static codebase.

## Demo collection

- `index.html` — sales gallery for all five concepts.
- `demo.html?site=beauty` — ÉLAN Beauty & Nails (editorial ivory / blush).
- `demo.html?site=flowers` — ANÉMONE Flowers (immersive floral).
- `demo.html?site=grooming` — WOOF. Pet Grooming (playful violet).
- `demo.html?site=detailing` — OBSIDIAN Auto Detail (dark lime, performance-inspired).
- `demo.html?site=barber` — THE GENTLEMEN Barber House (cinematic tobacco / gold).

## Run

No install or build required. Serve the directory using `python -m http.server 8080`, then open `http://localhost:8080`. Any static host works (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

## Customize a client site

1. Duplicate a property inside `data.js`, give it a new key and set its `brand`, `suffix`, `title`, `intro`, `services`, `hours`, `address`, accent, and photo IDs.
2. Link to `demo.html?site=YOUR_KEY` (or create a dedicated deployment whose default demo key is your client key).
3. Update photos: images currently use publicly accessible Unsplash URLs. Before commercial handover replace with real business photos or licensed media and optimize for production. The demo brands, prices and business details are fictional.
4. Booking: `booking.mode` defaults to `demo`, which NEVER sends or confirms a booking. Set `booking.whatsapp` to digits-only international number (e.g. `3069XXXXXXXX`) to send a *booking request* via WhatsApp with service/date/time/customer. No availability is checked; the business must confirm. Alternatively set `booking.externalUrl` to a real Cal.com, Fresha, Booksy or other booking page for managed timeslots. DO NOT link it to a placeholder.
5. Replace demo disclaimer and fake contact details only after real business onboarding. Confirm legal requirements: privacy notice, GDPR handling, business details and cookie policy if adding third-party trackers.

## Motion & accessibility

Scroll-entry motion using IntersectionObserver, gallery fade transitions with touch swipe + controls, continuous editorial marquee, hero photographic motion, mobile menu and booking drawer. Honors `prefers-reduced-motion`, has keyboard focus states, dialog Escape and focus trapping.

## Technical

Pure HTML/CSS/JS, one central configuration object (`data.js`), no framework, no runtime dependencies, no paid booking API. External Google Fonts and Unsplash images require a network connection. Performance & browser testing should be carried out before client handover.

## Sources / visual research

Visual reference *principles*, not copied designs: Awwwards (editorial hero and galleries), Dribbble (salon and barber service menus), One Page Love (one-page structure), 60fps.design (microinteractions). No reference site design, images or source files have been reproduced or extracted.