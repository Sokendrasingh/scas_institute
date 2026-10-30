const site=document.getElementById('site');
let observedNav=null,headerFrame=0;
const headerResize=new ResizeObserver(()=>scheduleHeaderLayout());
function scheduleHeaderLayout(){if(!headerFrame)headerFrame=requestAnimationFrame(updateHeaderLayout);}
function updateHeaderLayout(){headerFrame=0;const nav=site.querySelector('nav');if(!nav)return;
 if(nav!==observedNav){if(observedNav)headerResize.unobserve(observedNav);observedNav=nav;headerResize.observe(nav);}
 let spacer=site.querySelector('[data-header-spacer]');if(!spacer){spacer=document.createElement('div');spacer.dataset.headerSpacer='';spacer.setAttribute('aria-hidden','true');nav.before(spacer);}
 const banner=document.querySelector('.institute-banner');document.documentElement.style.setProperty('--marquee-height',Math.ceil(banner?.getBoundingClientRect().height||0)+'px');const editor=document.getElementById('editor');document.documentElement.style.setProperty('--editor-offset',Math.ceil(editor?.getBoundingClientRect().height||0)+'px');
 document.documentElement.style.setProperty('--navigation-height',Math.ceil(nav.getBoundingClientRect().height)+'px');
}
const pinnedBanner=document.querySelector('.institute-banner');if(pinnedBanner)headerResize.observe(pinnedBanner);
new MutationObserver(scheduleHeaderLayout).observe(site,{childList:true,subtree:true,characterData:true});
window.addEventListener('resize',scheduleHeaderLayout);scheduleHeaderLayout();

