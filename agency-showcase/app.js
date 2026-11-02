(() => {
  const params = new URLSearchParams(location.search);
  const key = Object.prototype.hasOwnProperty.call(window.SHOWCASE, params.get('site')) ? params.get('site') : 'beauty';
  const data = window.SHOWCASE[key];
  const keys = Object.keys(window.SHOWCASE);
  const img = (id, width = 1600) => `https://images.unsplash.com/${encodeURIComponent(id)}?auto=format&fit=crop&w=${width}&q=82`;
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
  const first = data.title.split('\n')[0];
  const second = data.title.split('\n')[1] || '';
  document.title = `${data.brand} — ${data.suffix}`;
  document.body.className = `demo-page demo-${key}`;
  document.documentElement.style.setProperty('--accent', data.accent);
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="demo-ribbon"><a href="index.html" aria-label="Επιστροφή στη συλλογή">← STUDIO COLLECTION</a><span>LIVE CONCEPT <i></i> ${keys.indexOf(key)+1} / 05</span><button id="switcher" aria-expanded="false" aria-controls="demo-switch">MORE DEMOS <span>⌄</span></button><div id="demo-switch" class="switch-dropdown" hidden>${keys.map(k=>`<a href="demo.html?site=${k}" ${k===key?'aria-current="page"':''}>${esc(window.SHOWCASE[k].category)} <span>↗</span></a>`).join('')}</div></div>
    <div class="scroll-meter" id="scroll-meter"></div>
    <header class="demo-header" id="site-header"><a class="site-logo" href="#top" aria-label="${esc(data.brand)} — αρχική">${esc(data.brand)}<small>${esc(data.suffix)}</small></a><nav id="main-nav" class="site-nav" aria-label="Βασική πλοήγηση"><a href="#about">STORY</a><a href="#services">SERVICES</a><a href="#work">GALLERY</a><a href="#contact">CONTACT</a></nav><button class="nav-book" data-book>${esc(data.appointment)} <span>↗</span></button><button class="mobile-toggle" aria-label="Άνοιγμα μενού" aria-controls="main-nav" aria-expanded="false"><span></span><span></span></button></header>
    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-visual"><img class="hero-photo" src="${img(data.hero, 2000)}" alt="${esc(data.imgAlt)}" fetchpriority="high"/><div class="hero-grad"></div></div>
        <div class="hero-decor" aria-hidden="true">✳</div>
        <div class="hero-inner"><div class="hero-eyebrow animate-in"><span class="tiny-line"></span>${esc(data.eyebrow)}</div><h1 id="hero-title" class="hero-title animate-in">${esc(first)}<br><em>${esc(second)}</em></h1><p class="hero-description animate-in">${esc(data.intro)}</p><div class="hero-actions animate-in"><button class="primary-cta" data-book>${esc(data.appointment)} <span>↗</span></button><a href="#services" class="secondary-cta">DISCOVER SERVICES <span>↓</span></a></div></div>
        <div class="hero-bottom"><span>01 — ${esc(data.category)}</span><span>${esc(data.city)} / GR</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
        <div class="hero-side-note">${esc(data.suffix)} / EST. FOR THE PRESENT</div>
      </section>
      <div class="ticker" aria-label="Brand values"><div class="ticker-track">${Array.from({length:4},()=>`<span>${esc(data.brand)} <b>✳</b> ${esc(data.showcase)} <b>✳</b></span>`).join('')}</div></div>
      <section class="intro-section section-pad" id="about"><div class="micro-heading reveal"><span>01 / ABOUT THE STUDIO</span><span>${esc(data.city)}, GREECE</span></div><div class="intro-grid"><div class="intro-head reveal"><span class="spark">✳</span><h2>${esc(data.greek)}</h2></div><div class="intro-right reveal"><span class="eyebrow-text">${esc(data.sectionLabel)}</span><p>${esc(data.intro)}</p><a href="#work" class="text-link">EXPLORE OUR WORLD <span>↗</span></a></div></div></section>
      <section class="services-section section-pad" id="services"><div class="micro-heading reveal"><span>02 / WHAT WE DO</span><span>PERSONALIZED SERVICES</span></div><div class="services-heading reveal"><div><span class="eyebrow-text">MADE FOR YOU</span><h2>The finer<br><em>details.</em></h2></div><p>${esc(data.before)}<br>${esc(data.after)}</p></div><div class="services-list">${data.services.map((s,i)=>`<button class="service-row reveal" data-service="${i}" aria-label="${esc(s.name)} — ${esc(s.price)}, ${esc(data.appointment)}"><span class="service-num">0${i+1}</span><span class="service-main"><strong>${esc(s.name)}</strong><small>${esc(s.sub)}</small></span><span class="service-duration">${esc(s.duration)}</span><span class="service-price">${esc(s.price)}</span><span class="service-arrow">↗</span></button>`).join('')}</div><div class="service-footer reveal"><span>THE LITTLE THINGS MAKE THE DIFFERENCE.</span><button class="outline-cta" data-book>BOOK YOUR EXPERIENCE ↗</button></div></section>
      <section class="work-section" id="work"><div class="work-header section-pad"><div class="micro-heading reveal"><span>03 / VISUAL JOURNAL</span><span>AN EXPLORATION</span></div><div class="work-heading reveal"><h2>Made to be<br><em>remembered.</em></h2><p>${esc(data.showcase)}</p></div></div><div class="gallery-stage" aria-label="Φωτογραφική συλλογή"><div class="gallery-track">${data.slides.map((photo,i)=>`<div class="gallery-slide ${i===0?'is-active':''}" data-index="${i}" aria-hidden="${i!==0}"><img src="${img(photo, 1850)}" alt="${esc(data.category)} – ${i+1}" loading="lazy"/><span class="slide-vignette"></span><span class="slide-caption">${esc(data.category)}<small>THE STUDIO EDIT / 0${i+1}</small></span></div>`).join('')}</div><div class="gallery-controls"><span class="gallery-count"><b id="slide-count">01</b> / 0${data.slides.length}</span><div class="gallery-progress"><span id="gallery-progress"></span></div><button id="slide-prev" aria-label="Προηγούμενη φωτογραφία">←</button><button id="slide-next" aria-label="Επόμενη φωτογραφία">→</button></div></div></section>
      <section class="statement-section section-pad"><div class="micro-heading reveal"><span>04 / THE PHILOSOPHY</span><span>ALWAYS IN THE DETAILS</span></div><div class="statement-content reveal"><span class="quote-glyph">“</span><blockquote>${esc(data.quote)}</blockquote><span class="quote-credit">— ${esc(data.quoteBy)}</span></div><div class="statement-star" aria-hidden="true">✺</div></section>
      <section class="contact-section section-pad" id="contact"><div class="micro-heading reveal"><span>05 / YOUR NEXT VISIT</span><span>LET'S MAKE IT HAPPEN</span></div><div class="contact-grid"><div class="reveal"><span class="eyebrow-text">WE'D LOVE TO SEE YOU</span><h2>Your moment<br><em>starts here.</em></h2><button class="big-book" data-book>${esc(data.appointment)} <span>↗</span></button></div><div class="contact-details reveal"><div><small>FIND US</small><strong>${esc(data.address)}</strong></div><div><small>OPENING HOURS</small><strong>${esc(data.hours)}</strong></div><div><small>CONNECT</small><strong>Instagram / WhatsApp <span class="faded">(ρυθμίζεται ανά πελάτη)</span></strong></div></div></div></section>
    </main><footer class="demo-footer"><a class="site-logo" href="#top">${esc(data.brand)}<small>${esc(data.suffix)}</small></a><span>© 2026 · DESIGN DEMO — NOT A REAL BUSINESS</span><a href="index.html">BACK TO ALL DEMOS ↗</a></footer>
    <div class="booking-backdrop" id="booking-backdrop" hidden></div><aside id="booking" class="booking-panel" role="dialog" aria-modal="true" aria-labelledby="booking-title" aria-hidden="true" tabindex="-1"><div class="booking-top"><span>YOUR NEXT VISIT / ${esc(data.brand)}</span><button id="booking-close" aria-label="Κλείσιμο">✕</button></div><div class="booking-body"><span class="eyebrow-text">MAKE TIME FOR YOURSELF</span><h2 id="booking-title">Let's make<br><em>a date.</em></h2><p>Συμπλήρωσε τα στοιχεία σου για να ζητήσεις ραντεβού.</p><form id="booking-form"><label>ΥΠΗΡΕΣΙΑ<select name="service" id="book-service" required>${data.services.map((s,i)=>`<option value="${i}">${esc(s.name)} · ${esc(s.price)}</option>`).join('')}</select></label><label>ΗΜΕΡΟΜΗΝΙΑ<input name="date" type="date" required id="book-date"/></label><label>ΠΡΟΤΙΜΩΜΕΝΗ ΩΡΑ<select name="time" required><option value="">Επίλεξε ώρα</option><option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option><option>14:00</option><option>15:00</option><option>16:00</option><option>17:00</option><option>18:00</option></select></label><label>ΟΝΟΜΑ<input name="name" autocomplete="name" placeholder="Το όνομά σου" maxlength="80" required/></label><label>ΤΗΛΕΦΩΝΟ<input name="phone" type="tel" autocomplete="tel" placeholder="69XXXXXXXX" minlength="7" maxlength="25" required/></label><button class="booking-submit" type="submit">ΑΙΤΗΜΑ ΡΑΝΤΕΒΟΥ <span>↗</span></button><p class="booking-note">${data.booking.mode==='demo'?'DEMO MODE · Δεν αποστέλλεται πραγματική κράτηση.':'Το ραντεβού επιβεβαιώνεται μόνο από την επιχείρηση.'}</p></form><div id="booking-result" class="booking-result" role="status" aria-live="polite" hidden></div></div></aside>`;

  const $ = (selector) => document.querySelector(selector);
  const body = document.body;
  let bookingTrigger = null;
  const booking = $('#booking');
  const backdrop = $('#booking-backdrop');
  const closeBook = () => {booking.classList.remove('open');booking.setAttribute('aria-hidden','true');backdrop.hidden=true;body.classList.remove('is-booking');bookingTrigger?.focus();};
  const openBook = (index) => {
    const mode = data.booking || {mode:'demo'};
    if (mode.externalUrl) { window.open(mode.externalUrl,'_blank','noopener,noreferrer'); return; }
    bookingTrigger = document.activeElement;
    if (index !== undefined) $('#book-service').value = String(index);
    $('#booking-result').hidden = true;
    $('#booking-form').hidden = false;
    backdrop.hidden=false; booking.classList.add('open'); booking.setAttribute('aria-hidden','false'); body.classList.add('is-booking'); booking.focus();
  };
  document.querySelectorAll('[data-book]').forEach(b => b.addEventListener('click',()=>openBook()));
  document.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>openBook(Number(b.dataset.service))));
  $('#booking-close').addEventListener('click',closeBook);backdrop.addEventListener('click',closeBook);
  document.addEventListener('keydown', e=>{if(e.key==='Escape' && booking.classList.contains('open')) closeBook();if(e.key==='Tab' && booking.classList.contains('open')){const els=Array.from(booking.querySelectorAll('button:not([hidden]),input:not([hidden]),select:not([hidden])')).filter(n=>n.offsetParent!==null);if(!els.length)return;const a=els[0],z=els[els.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}});
  // Date is in the visitor's local timezone, not UTC.
  const now = new Date(); const localDate = [now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-'); $('#book-date').min=localDate;
  $('#booking-form').addEventListener('submit',e=>{
    e.preventDefault(); const form = e.currentTarget; if(!form.reportValidity()) return;
    const values = new FormData(form);
    const service = data.services[Number(values.get('service'))];
    const summary = `Καλησπέρα! Θα ήθελα να ζητήσω ραντεβού στο ${data.brand}.\nΥπηρεσία: ${service.name}\nΗμερομηνία: ${values.get('date')}\nΏρα προτίμησης: ${values.get('time')}\nΌνομα: ${values.get('name')}\nΤηλέφωνο: ${values.get('phone')}\nΠαρακαλώ επιβεβαιώστε τη διαθεσιμότητα.`;
    const result = $('#booking-result'); form.hidden = true; result.hidden = false;
    if(data.booking.whatsapp && /^\d{9,15}$/.test(data.booking.whatsapp)){
      result.innerHTML='<h3>Το αίτημά σου είναι έτοιμο.</h3><p>Θα ανοίξει το WhatsApp. Η κράτηση ισχύει μόνο μετά από επιβεβαίωση.</p><button class="booking-submit" id="send-wa">ΑΝΟΙΓΜΑ WHATSAPP ↗</button>';
      $('#send-wa').addEventListener('click',()=>window.open(`https://wa.me/${data.booking.whatsapp}?text=${encodeURIComponent(summary)}`,'_blank','noopener,noreferrer'));
    }else{
      result.innerHTML=`<h3>Προεπισκόπηση αιτήματος ✓</h3><p>Αυτό είναι demo. Κανένα αίτημα δεν στάλθηκε. Η τελική ιστοσελίδα μπορεί να συνδεθεί με WhatsApp ή online booking.</p><pre>${esc(summary)}</pre><button class="booking-submit" id="again-book">ΝΕΟ ΑΙΤΗΜΑ ↗</button>`;
      $('#again-book').addEventListener('click',()=>{result.hidden=true;form.hidden=false;});
    }
  });
  // Responsive menu and demo switcher.
  const toggle = $('.mobile-toggle');
  toggle.addEventListener('click',()=>{const open=$('#main-nav').classList.toggle('nav-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Κλείσιμο μενού':'Άνοιγμα μενού');});
  document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',()=>{$('#main-nav').classList.remove('nav-open');toggle.setAttribute('aria-expanded','false');}));
  $('#switcher').addEventListener('click',()=>{const el=$('#demo-switch');el.hidden=!el.hidden;$('#switcher').setAttribute('aria-expanded',String(!el.hidden));});
  document.addEventListener('click',e=>{if(!e.target.closest('#switcher, #demo-switch')){$('#demo-switch').hidden=true;$('#switcher').setAttribute('aria-expanded','false');}});
  const meter=$('#scroll-meter'); let pending=false;
  const onScroll=()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{const amount=Math.max(0,document.documentElement.scrollHeight-innerHeight);meter.style.transform=`scaleX(${amount?scrollY/amount:0})`;$('#site-header').classList.toggle('is-scrolled',scrollY>80);pending=false;});};
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  // Editorial reveal: disabled automatically for visitors requesting reduced motion.
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if('IntersectionObserver' in window && !prefersReduced){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');io.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));} else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('revealed'));
  const slides=Array.from(document.querySelectorAll('.gallery-slide')); let active=0, timer;
  const showSlide=(n)=>{active=(n+slides.length)%slides.length;slides.forEach((s,i)=>{s.classList.toggle('is-active',i===active);s.setAttribute('aria-hidden',String(i!==active));});$('#slide-count').textContent=String(active+1).padStart(2,'0');$('#gallery-progress').style.width=`${(active+1)/slides.length*100}%`;};
  const moveSlide=step=>{showSlide(active+step);restart();};
  $('#slide-next').addEventListener('click',()=>moveSlide(1));$('#slide-prev').addEventListener('click',()=>moveSlide(-1));
  const restart=()=>{clearInterval(timer);if(!prefersReduced && !document.hidden) timer=setInterval(()=>showSlide(active+1),6500);};
  document.addEventListener('visibilitychange',restart);$('.gallery-stage').addEventListener('mouseenter',()=>clearInterval(timer));$('.gallery-stage').addEventListener('mouseleave',restart);
  let downX=0;$('.gallery-stage').addEventListener('touchstart',e=>{downX=e.changedTouches[0].clientX;},{passive:true});$('.gallery-stage').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-downX;if(Math.abs(dx)>45)moveSlide(dx<0?1:-1);},{passive:true});
  showSlide(0);restart();
})();
