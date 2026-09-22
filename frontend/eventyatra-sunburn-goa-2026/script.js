(function(){
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');

  function openNav(){
    mobileNav.setAttribute('data-open', 'true');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav(){
    mobileNav.setAttribute('data-open', 'false');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  menuToggle.addEventListener('click', openNav);
  document.querySelectorAll('[data-close-nav]').forEach(function(el){
    el.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeNav();
  });

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      var id = link.getAttribute('href').slice(1);
      if(!id) return;
      var target = document.getElementById(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Active nav state based on scroll position ---------- */
  var navLinks = document.querySelectorAll('.site-nav a[data-path]');
  var sections = ['about', 'tickets'];
  // Keep it simple: nav here reflects the current page context (Events),
  // already marked with aria-current in markup.

  /* ---------- Ticket selection feedback ---------- */
  document.querySelectorAll('[data-select-ticket]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var name = btn.getAttribute('data-select-ticket');
      var original = btn.textContent;
      btn.textContent = 'Added \u2713';
      btn.disabled = true;
      setTimeout(function(){
        btn.textContent = original;
        btn.disabled = false;
      }, 1400);
    });
  });

  /* ---------- Lightbox gallery ---------- */
  var galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl4NWuWt-6VTMy_dZbNM-a9TxADwsRvfRBMp15keTxlXUeOFAxmgODNGRuFcFb04X6KIqzjQVrPtysdIpSw_yPFd_nP3ykGBrlLlTwWFQOMKi3hxjc-McT0NXR4pG2AgS7IOntcW2ePiXWCa0923FTCKqJz0bIrpK_HcS2fSCFIP7FtEU5so9NMFQnGYIJ2Kk0uynVqyV4CWHwcBopIrero1etulPXojCiiBuOYhs7t4vdRDyskEkP',
      caption: 'The 2026 Solaris Sun-Arena mainstage at dusk'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMnFH2X18WZ06NE40lg-PI4-pHjKaPlw_dz_zEaXQh3yu_wRZ4NHCVzuS6ZJSgxGODNXzBnKhP0ve9XpTr-aWlEt6Qt5Tcq59OQYDBrvmRxDSSGGVx-qvs7aYTj9ojcsrEoonjZQXNa-5lq2NwyDXfTCBBXS5sgipS5J6EiG4pTdN1MsatHw5soehfJj6MwjDMmyJU_iKtF6yxq22YUCdLtvl7UmqM5n66MkmSytvneA4YOD5ryblC',
      caption: 'Laser and light show over the crowd at Vagator Beach'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4weevEKirEfvXQtoJkITu8ojFei9SMOv2aYnZVOWrCzSf8UKVsgVf0X75Iq6YDwB9d8oExrlH59aJq0r98_Wv1QihuPkXVZBvijdGSCoRKLgxPf5d2MSec0kGtno_16i9zH0PwdHrJpSM7jSCyW9JKoeEU2slms60CbstVmVpLa4xH8ZgPoIGHn8I4yjgCdT9jJZGicKmBxdylRsSbIij0aFkgd9GaDE2RImhYV_CHV-tfnDjrShC',
      caption: 'Vagator Beach Arena — the festival venue'
    }
  ];

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxCount = document.getElementById('lightboxCount');
  var currentIndex = 0;

  function renderLightbox(){
    var item = galleryImages[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    lightboxCount.textContent = (currentIndex + 1) + ' of ' + galleryImages.length;
  }

  function openLightbox(index){
    currentIndex = index || 0;
    renderLightbox();
    lightbox.setAttribute('data-open', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.setAttribute('data-open', 'false');
    document.body.style.overflow = '';
  }

  document.getElementById('galleryTrigger').addEventListener('click', function(){
    openLightbox(0);
  });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxNext').addEventListener('click', function(){
    currentIndex = (currentIndex + 1) % galleryImages.length;
    renderLightbox();
  });
  document.getElementById('lightboxPrev').addEventListener('click', function(){
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    renderLightbox();
  });
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function(e){
    if(lightbox.getAttribute('data-open') !== 'true') return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
    if(e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
  });

})();
