(function(){
  const btn = document.querySelector('.mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  function setIconOpen(on){
    if(!btn) return;
    const i = btn.querySelector('i');
    if(!i) return;
    if(on){ i.classList.remove('ri-menu-line'); i.classList.add('ri-close-line'); }
    else { i.classList.remove('ri-close-line'); i.classList.add('ri-menu-line'); }
  }
  function openMenu(){
    if(!menu) return;
    menu.classList.add('open'); menu.classList.remove('closed');
    document.body.classList.add('overflow-hidden');
    if(btn) btn.setAttribute('aria-expanded','true');
    setIconOpen(true);
  }
  function closeMenu(){
    if(!menu) return;
    menu.classList.remove('open'); menu.classList.add('closed');
    document.body.classList.remove('overflow-hidden');
    if(btn) btn.setAttribute('aria-expanded','false');
    setIconOpen(false);
  }
  if(!btn || !menu) return;
  // initialize
  if(menu.classList.contains('closed')) setIconOpen(false);
  btn.addEventListener('click', ()=>{
    if(menu.classList.contains('open')) closeMenu(); else openMenu();
  });
  // close when clicking any link inside menu
  menu.addEventListener('click', (e)=>{
    if(e.target && e.target.tagName === 'A') closeMenu();
  });
  // close on escape or resize >= lg
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', ()=>{ if(window.innerWidth >= 1024) closeMenu(); });
})();
