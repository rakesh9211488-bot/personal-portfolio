import projects from './data/projects.json';
import metadata from './data/github-metadata.json';
const $=s=>document.querySelector(s);
const app=$('#app');
const email='rakesh9211488@gmail.com';
const linked='https://www.linkedin.com/in/rakesh-siripaka-b723511a1/';
const git='https://github.com/rakesh9211488-bot';
let audience='recruiter',filter='All',query='';
const nav=[['Home','/'],['Projects','/projects'],['About','/about'],['Expertise','/expertise'],['Contact','/contact']];
function header(){const path=location.pathname.replace(/\/$/,'')||'/';return `<a class="skip" href="#main">Skip to content</a><header class="shell top"><a class="logo" href="/" aria-label="Rakesh Siripaka home">RS<span>.</span></a><nav id="nav" class="nav" aria-label="Main navigation">${nav.map(([n,p])=>`<a href="${p}"${(p==='/'?path==='/':path===p||path.startsWith(p+'/'))?' aria-current="page"':''}>${n}</a>`).join('')}<button id="cmd" class="btn btn-dark" aria-label="Open quick navigation search (Control or Command plus K)">Search ↗</button></nav><button class="menu" id="menu" aria-expanded="false" aria-controls="nav" aria-label="Open navigation menu">Menu ☰</button></header>`}
function footer(){return `<footer class="dark"><div class="shell footer"><span>© ${new Date().getFullYear()} Rakesh Siripaka. Built with intention.</span><span><a href="${linked}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a> &nbsp; · &nbsp; <a href="${git}" target="_blank" rel="noopener noreferrer">GitHub ↗</a> &nbsp; · &nbsp; <a href="mailto:${email}">Email ↗</a></span></div></footer>`}
function projectCard(p,i){
  const screenshotCount=(p.gallery||[]).length;
  return `<a class="project project-case-card" href="/projects/${p.slug}" aria-label="View ${p.title} case study">
    <div class="project-art ${i%2?'farming':'orbit'}">
      <img src="${p.image}" alt="${p.title} project interface preview" loading="lazy">
      <span class="project-art-label">0${i+1} / SELECTED WORK · ${p.title}</span>
    </div>
    <div class="project-body">
      <div class="project-kicker"><span>${p.category}</span><span>CASE STUDY</span></div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="project-evidence"><span>Personal contribution described</span><span>${screenshotCount} development ${screenshotCount===1?'image':'images'}</span></div>
      <div class="project-foot"><span>${p.technologies.slice(0,3).join(' · ')}</span><span>VIEW CASE STUDY ↗</span></div>
    </div>
  </a>`
}
function home(){return `<main id="main" class="home-page"><section class="hero"><div class="shell hero-grid"><div class="hero-copy"><span class="eyebrow">Rakesh Siripaka / Bremen, Germany</span><span class="hero-focus">Digital Transformation <span aria-hidden="true">×</span> AI Automation</span><h1>Connecting technology,<br><span class="accent">automation &amp;<br>business transformation.</span></h1><p>Master's student in Management in Digitalization and Transformation with professional experience as an IT Support Engineer and hands-on project work involving workflow automation, API integrations, digital platforms and IoT systems.</p><div class="actions"><a class="btn btn-light" href="/projects">Explore My Projects <span>↗</span></a><a class="btn btn-outline" href="/assets/Rakesh_Siripaka_Public_CV.pdf" target="_blank" rel="noopener noreferrer">View My CV <span>↗</span></a></div></div><div class="portrait-wrap"><img class="portrait" src="/assets/portrait.jpg" alt="Professional portrait of Rakesh Siripaka" /></div></div><div class="shell hero-foot"><span>ENGINEERING × BUSINESS × TECHNOLOGY</span><a class="hero-scroll-link" href="#work">SCROLL TO SELECTED WORK <span aria-hidden="true">↓</span></a></div></section><section class="experience-strip shell" data-reveal aria-labelledby="experience-heading"><div class="experience-strip-top"><span class="eyebrow">Professional experience</span><span class="experience-dates">May 2024 — May 2025</span></div><div class="experience-strip-body"><div><h2 id="experience-heading">IT Support Engineer <span class="experience-employer">· Accel IT</span></h2><p>User support, incident and ticket handling, system monitoring, functional testing and technical documentation.</p></div><a class="inline-link" href="/about">View my experience ↗</a></div></section><section class="section shell"><div class="section-head" data-reveal><div><span class="eyebrow">01 / Perspective</span><h2>Where technical thinking<br><em class="palette">meets business needs.</em></h2></div><div class="switcher" role="group" aria-label="Choose visitor perspective"><button data-audience="recruiter" class="active">For recruiters</button><button data-audience="business">For hiring managers</button></div></div><div class="intro-panel" data-reveal><div><h3 id="audience-title">Experience spanning IT support and digital transformation.</h3><div class="tags" id="audience-tags"><span class="tag">IT support</span><span class="tag">Automation</span><span class="tag">Business processes</span></div></div><div><p id="audience-desc">Explore professional experience, relevant skills, education and selected projects with clearly explained contributions.</p><a class="btn btn-dark" id="audience-link" href="/expertise">Explore expertise ↗</a></div></div></section><section class="section shell" id="work"><div class="section-head" data-reveal><div><span class="eyebrow">02 / Selected work</span><h2>Practical projects.<br><em class="palette">Real learning.</em></h2></div><p>Explore the problems, approaches, technical components and contributions behind CareerOrbit and TechFarming.</p></div><div class="projects" data-reveal>${projects.filter(p=>p.featured).map(projectCard).join('')}</div><p style="margin-top:25px"><a class="inline-link" href="/projects">Explore all selected projects ↗</a></p></section><section class="dark section"><div class="shell intro-panel" data-reveal><div><span class="eyebrow">03 / Approach</span><h2 style="font-size:clamp(44px,5vw,76px)">Understand the problem.<br><span class="accent">Connect the systems.</span></h2></div><div><p>I approach technology through practical troubleshooting, structured learning and an interest in improving digital processes.</p><a class="btn btn-light" href="/about">Discover my journey ↗</a></div></div></section><section class="section shell" data-reveal><span class="eyebrow">04 / Connect</span><h2 class="contact-title">Let's connect<br><em class="palette">professionally.</em></h2><a class="btn btn-dark" href="mailto:${email}">Start a conversation ↗</a></section></main>`}
function projectsPage(){return `<main id="main"><section class="shell page-head"><span class="eyebrow">Selected projects / 01—02</span><h1>Work with<br><em class="palette">substance.</em></h1><p>Project stories centered on the challenge, the approach and my actual contributions.</p><div class="filter"><button data-filter="All" class="active">All</button><button data-filter="Automation">Automation</button><button data-filter="IoT">IoT</button></div><input class="search" id="project-search" type="search" placeholder="Search featured projects" aria-label="Search projects"></section><section class="shell" style="padding-bottom:110px"><div class="projects" id="project-grid">${projects.map(projectCard).join('')}</div><p class="smallnote" style="margin-top:25px">New public repositories are monitored as metadata only. Additional featured case studies are published after review.</p></section></main>`}
function projectNodes(p){
  if(p.slug==='careerorbit')return [
    {title:'Career workspace',description:'The user-facing application workspace was run locally during development. It brings job and application activities into one place.'},
    {title:'n8n workflows',description:'Multi-step job-matching and application-related workflows were customized, configured and tested.'},
    {title:'API integrations',description:'API connections were used between selected workflow steps and external services during development and troubleshooting.'},
    {title:'Supabase',description:'Database tables and CV document storage were configured to support the application workflow.'}
  ];
  return [
    {title:'Sensor prototype',description:'The academic project involved a collaborative agriculture-monitoring concept using physical sensor components.'},
    {title:'Hardware work',description:'Hardware and software tasks were explored in a two-person project, including coordination and prototype-related work.'},
    {title:'Application data flow',description:'Application-side data movement and testing were part of the project and subsequent platform improvements.'},
    {title:'Web platform',description:'Later enhancements involved the supporting web application. Live connectivity between physical sensors and the web platform has not been verified.'}
  ];
}
function detail(p){
  const nodes=projectNodes(p);
  const career=p.slug==='careerorbit';
  const scopeNote=career
    ? 'Development screenshots show local interfaces, configured workflows and database structures. They do not establish a production deployment or measured business impact.'
    : 'This case study covers a collaborative sensor prototype and later web-platform work. The screenshots do not verify a live sensor-to-website connection.';
  return `<main id="main" class="case-study-page">
    <section class="shell page-head case-study-hero">
      <a href="/projects" class="back">← All projects</a>
      <span class="eyebrow case-study-eyebrow">PROJECT CASE STUDY / ${career?'01':'02'}</span>
      <h1>${p.title}<span class="palette">.</span></h1>
      <p>${p.summary}</p>
      <div class="case-study-tags" aria-label="Project technologies">${p.technologies.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="actions case-study-actions">
        <a class="btn btn-dark" href="${p.repo}" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>
        <a class="btn btn-case-outline" href="#evidence">See development evidence ↓</a>
      </div>
    </section>
    <nav class="shell case-study-nav" aria-label="On this project">
      <a href="#challenge">Challenge</a><a href="#approach">Approach</a><a href="#contribution">My contribution</a><a href="#components">Components</a><a href="#evidence">Evidence</a>
    </nav>
    <section class="shell case-study-overview" aria-label="Project at a glance">
      <div><span class="eyebrow">Area</span><strong>${p.category}</strong></div>
      <div><span class="eyebrow">My work</span><strong>${career?'Workflow configuration & testing':'Collaborative prototyping & testing'}</strong></div>
      <div><span class="eyebrow">Documentation</span><strong>${(p.gallery||[]).length} development ${(p.gallery||[]).length===1?'image':'images'} · GitHub source</strong></div>
    </section>
    <section class="shell section case-study-story" aria-label="Project narrative">
      <article id="challenge" class="case-study-chapter">
        <div><span class="eyebrow">01 / The challenge</span><h2>What problem was explored?</h2></div>
        <p>${p.problem}</p>
      </article>
      <article id="approach" class="case-study-chapter">
        <div><span class="eyebrow">02 / The approach</span><h2>How was it approached?</h2></div>
        <p>${p.approach}</p>
      </article>
      <article id="contribution" class="case-study-chapter case-study-contribution">
        <div><span class="eyebrow">03 / My contribution</span><h2>What did I work on?</h2></div>
        <p>${p.contribution}</p>
      </article>
    </section>
    <section class="case-study-map-section" id="components">
      <div class="shell">
        <div class="case-study-section-heading">
          <span class="eyebrow">04 / Technical overview</span>
          <h2>Explore the <em class="palette">components.</em></h2>
          <p>Choose a component to learn about its role. This is an illustrative overview of the project work, not a verified production architecture.</p>
        </div>
        <div class="system-map" role="group" aria-label="${p.title} component explorer">
          ${nodes.map((node,i)=>`<button type="button" class="system-node ${i===0?'is-selected':''}" data-node="${i}" aria-pressed="${i===0?'true':'false'}" aria-controls="node-detail"><span class="system-node-num">0${i+1}</span><span class="system-node-title">${node.title}</span><span class="system-node-cta">EXPLORE <span aria-hidden="true">↗</span></span></button>`).join('')}
        </div>
        <div id="node-detail" class="system-detail" role="status" aria-live="polite" aria-atomic="true">
          <span id="node-counter" class="eyebrow">Component 1 of ${nodes.length}</span>
          <h3 id="node-title">${nodes[0].title}</h3>
          <p id="node-description">${nodes[0].description}</p>
        </div>
      </div>
    </section>
    <section class="section shell project-gallery case-study-evidence" id="evidence">
      <span class="eyebrow">05 / Development evidence</span>
      <h2>Inside the <em class="palette">project.</em></h2>
      <p>Selected development screenshots with descriptive captions.</p>
      <div class="gallery-grid">${(p.gallery||[]).map(g=>`<figure><a href="${g.src}" target="_blank" rel="noopener noreferrer" aria-label="Open screenshot: ${g.caption}"><img src="${g.src}" alt="${g.caption}" loading="lazy"></a><figcaption>${g.caption}</figcaption></figure>`).join('')}</div>
      <aside class="case-study-scope"><strong>Evidence &amp; limitations</strong><p>${scopeNote}</p></aside>
    </section>
    <section class="shell case-study-end">
      <a class="btn btn-dark" href="/projects">← All selected projects</a>
      <a class="inline-link" href="mailto:${email}">Discuss this project ↗</a>
    </section>
  </main>`
}
function about(){return `<main id="main"><section class="shell page-head"><span class="eyebrow">The person behind the projects</span><h1>Curiosity meets<br><em class="palette">practical thinking.</em></h1><p>I'm Rakesh Siripaka, based in Bremen, Germany. My background connects electronics engineering, IT support experience and ongoing studies in digitalization and transformation.</p></section><section class="section shell intro-panel"><img src="/assets/portrait.jpg" alt="Rakesh Siripaka" style="width:100%;max-width:470px;max-height:520px;object-fit:cover"><div><span class="eyebrow">My perspective</span><h3>Understanding systems. Connecting the dots.</h3><p>From supporting operational IT systems to exploring workflow automation and IoT projects, I am interested in technology that solves understandable, real problems.</p><p>I am currently pursuing an M.A. in Management in Digitalization and Transformation at Hochschule Bremen.</p></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">Journey</span><h2>Experience &<br><em class="palette">education.</em></h2></div></div><div class="timeline"><div class="timeline-item"><strong>Currently pursuing</strong><div><h3>M.A. Management in Digitalization and Transformation</h3><p>Hochschule Bremen, Germany · Business Process Management, IT Governance, Digital Transformation Strategy, Supply Chain Digitalization</p></div></div><div class="timeline-item"><strong>May 2024 — May 2025</strong><div><h3>IT Support Engineer · Accel IT</h3><p>System monitoring, ticket and incident handling, functional testing, documentation and user support across Windows/Active Directory, Microsoft Office and SAP environments.</p></div></div><div class="timeline-item"><strong>2023</strong><div><h3>B.Tech. Electronics and Communication Engineering</h3><p>Malla Reddy University, India</p></div></div></div></section></main>`}
function expertise(){return `<main id="main"><section class="shell page-head"><span class="eyebrow">Capabilities / Approach</span><h1>Technical depth.<br><em class="palette">Business context.</em></h1><p>Skills grounded in professional responsibilities, personal projects and ongoing academic learning.</p></section><section class="section shell"><div class="projects">${[['IT support','User support, system monitoring, incident management, ticket workflows, functional testing, Windows/Active Directory and documentation.'],['Workflow automation','Hands-on customization and testing of n8n workflows, API integrations and process flows.'],['Digital platforms','Supabase tables and storage configuration, Git/GitHub collaboration, troubleshooting and web-platform exposure.'],['Digital transformation','Academic focus on process management, IT governance, transformation strategy and supply chain digitalization.']].map(([a,b],i)=>`<article class="project-body" style="background:white;border:1px solid var(--line)"><span class="eyebrow">0${i+1} / Capability</span><h3>${a}</h3><p>${b}</p></article>`).join('')}</div></section></main>`}
function contact(){return `<main id="main"><section class="shell page-head"><span class="eyebrow">Let's connect</span><h1>Good conversations<br><em class="palette">start here.</em></h1><p>For professional conversations about digital systems, technology projects or collaboration, reach out using the links below.</p><div class="actions"><a class="btn btn-dark" href="mailto:${email}">Email me ↗</a><a class="btn btn-dark" href="/assets/Rakesh_Siripaka_Public_CV.pdf" target="_blank" rel="noopener noreferrer">Download CV ↗</a><a class="btn btn-dark" href="${linked}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a class="btn btn-dark" href="${git}" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div><p class="smallnote" style="margin-top:32px">Based in Bremen, Germany. No public phone number or street address.</p></section></main>`}
function render(){const path=decodeURI(location.pathname).replace(/\/$/,'')||'/';const p=projects.find(p=>path===`/projects/${p.slug}`);document.title=(p?p.title:path==='/'?'Home':path.slice(1).replace(/^./,c=>c.toUpperCase()))+' — Rakesh Siripaka';app.innerHTML=header()+(p?detail(p):path==='/projects'?projectsPage():path==='/about'?about():path==='/expertise'?expertise():path==='/contact'?contact():home())+footer();$('#menu')?.addEventListener('click',()=>{const n=$('#nav');const menu=$('#menu');const open=n.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');menu.textContent=open?'Close ×':'Menu ☰';if(open)n.querySelector('a')?.focus()});$('#cmd')?.addEventListener('click',openPalette);document.querySelectorAll('[data-audience]').forEach(b=>b.addEventListener('click',()=>{audience=b.dataset.audience;document.querySelectorAll('[data-audience]').forEach(x=>x.classList.toggle('active',x===b));const business=audience==='business';$('#audience-title').textContent=business?'From technical ideas to practical digital solutions.':'Experience spanning IT support and digital transformation.';$('#audience-desc').textContent=business?'Explore project challenges, solution approaches, system components and the contributions behind each implementation.':'Explore professional experience, relevant skills, education and selected projects with clearly explained contributions.';$('#audience-tags').innerHTML=(business?['Project approach','System architecture','Process improvement']:['IT support','Automation','Business processes']).map(x=>`<span class="tag">${x}</span>`).join('');$('#audience-link').href=business?'/projects':'/expertise';$('#audience-link').textContent=business?'Explore solutions ↗':'Explore expertise ↗'}));const nodeButtons=[...document.querySelectorAll('.system-node')];const currentNodes=p?projectNodes(p):[];const selectNode=index=>{const node=currentNodes[index];if(!node)return;nodeButtons.forEach((button,i)=>{const active=i===index;button.classList.toggle('is-selected',active);button.setAttribute('aria-pressed',String(active))});$('#node-counter').textContent=`Component ${index+1} of ${currentNodes.length}`;$('#node-title').textContent=node.title;$('#node-description').textContent=node.description;};nodeButtons.forEach((button,index)=>{button.addEventListener('click',()=>selectNode(index));button.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const direction=e.key==='ArrowRight'?1:-1;const next=(index+direction+nodeButtons.length)%nodeButtons.length;nodeButtons[next].focus();selectNode(next)})});document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));updateGrid()}));$('#project-search')?.addEventListener('input',e=>{query=e.target.value;updateGrid()});setupHomeReveals();}
function setupHomeReveals(){
  const home=document.querySelector('.home-page');
  if(!home||!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const items=[...home.querySelectorAll('[data-reveal]')];
  if(!items.length)return;
  const observer=new IntersectionObserver((entries)=>{
    for(const entry of entries){
      if(entry.isIntersecting){
        entry.target.classList.remove('reveal-prep');
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    }
  },{threshold:0.08,rootMargin:'0px 0px 40px 0px'});
  for(const element of items){
    if(element.getBoundingClientRect().top<window.innerHeight*0.94){
      element.classList.add('reveal-visible');
    }else{
      element.classList.add('reveal-prep');
      observer.observe(element);
    }
  }
}
function updateGrid(){const selected=projects.filter(p=>(filter==='All'||`${p.category} ${p.technologies.join(' ')}`.toLowerCase().includes(filter.toLowerCase()))&&`${p.title} ${p.summary} ${p.technologies.join(' ')}`.toLowerCase().includes(query.toLowerCase()));$('#project-grid').innerHTML=selected.length?selected.map(projectCard).join(''):'<p>No matching featured projects.</p>';}

let paletteReturnFocus=null;
function closePalette(restoreFocus=true){
  const modal=$('.modal');
  if(!modal)return;
  modal.remove();
  if(restoreFocus && paletteReturnFocus?.isConnected)paletteReturnFocus.focus();
  paletteReturnFocus=null;
}
function openPalette(){
  if($('.modal'))return;
  paletteReturnFocus=document.activeElement;
  const modal=document.createElement('div');
  modal.className='modal';
  modal.innerHTML=`<div class="modal-inner" role="dialog" aria-modal="true" aria-label="Quick navigation"><button id="close" style="float:right;background:none;border:0" aria-label="Close">✕</button><strong>Quick navigation</strong><input id="palette-search" placeholder="Search pages and projects…" aria-label="Search navigation"><div id="palette-items"></div><p class="smallnote">Press Esc to close · Ctrl/⌘ + K to open</p></div>`;
  document.body.append(modal);
  const input=$('#palette-search');
  const links=[...nav,...projects.map(p=>[p.title,`/projects/${p.slug}`])];
  function refresh(){
    const s=input.value.toLowerCase();
    $('#palette-items').innerHTML=links.filter(x=>x[0].toLowerCase().includes(s)).map(x=>`<a href="${x[1]}">${x[0]} ↗</a>`).join('')||'No matches';
  }
  refresh();
  input.addEventListener('input',refresh);
  input.focus();
  $('#close').addEventListener('click',()=>closePalette());
  modal.addEventListener('click',e=>{if(e.target===modal)closePalette()});
  modal.addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const controls=[...modal.querySelectorAll('button,input,a')];
    const first=controls[0],last=controls[controls.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  });
}
function closeMobileMenu(){
  const menu=$('#menu'),navbar=$('#nav');
  if(!menu||!navbar)return;
  navbar.classList.remove('open');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label','Open navigation menu');
  menu.textContent='Menu ☰';
}
function updateRoute(scrollY=0){
  const apply=()=>{
    render();
    window.scrollTo(0,scrollY);
    const heading=document.querySelector('#main h1')||$('#main');
    if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true})}
  };
  if(typeof document.startViewTransition==='function'&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.startViewTransition(apply);
  }else{apply()}
}
function navigateTo(path){
  const destination=new URL(path,location.href);
  if(destination.pathname+destination.search===location.pathname+location.search){
    closeMobileMenu();
    window.scrollTo({top:0,behavior:'smooth'});
    return;
  }
  history.replaceState({...history.state,scrollY:window.scrollY},'',location.href);
  history.pushState({scrollY:0},'',destination.pathname+destination.search);
  updateRoute(0);
}
document.addEventListener('click',e=>{
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const anchor=e.target.closest('a[href]');
  if(!anchor||anchor.hasAttribute('download')||(anchor.target&&anchor.target!=='_self'))return;
  const url=new URL(anchor.href,location.href);
  if(url.origin!==location.origin||!['http:','https:'].includes(url.protocol)||url.hash||url.pathname.startsWith('/assets/'))return;
  e.preventDefault();
  if(anchor.closest('.modal'))closePalette(false);
  navigateTo(url.pathname+url.search);
});
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPalette()}
  if(e.key==='Escape'){
    if($('.modal'))closePalette();
    else if($('#nav')?.classList.contains('open')){closeMobileMenu();$('#menu')?.focus()}
  }
});
document.addEventListener('click',e=>{
  if($('#nav')?.classList.contains('open')&&!e.target.closest('.top'))closeMobileMenu();
});
history.scrollRestoration='manual';
window.addEventListener('popstate',()=>updateRoute(history.state?.scrollY??0));
render();
