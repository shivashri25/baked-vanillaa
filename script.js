const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.textContent=open?"×":"☰";});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.textContent="☰";}));
const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...nav.querySelectorAll("a")];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));}}),{threshold:.45});
sections.forEach(section=>observer.observe(section));
const lightbox=document.querySelector(".lightbox"),preview=lightbox.querySelector("img");
document.querySelectorAll(".artwork").forEach(button=>button.addEventListener("click",()=>{preview.src=button.dataset.image;lightbox.hidden=false;document.body.style.overflow="hidden";lightbox.querySelector(".close").focus();}));
function closePreview(){lightbox.hidden=true;preview.src="";document.body.style.overflow="";}
lightbox.querySelector(".close").addEventListener("click",closePreview);
lightbox.addEventListener("click",event=>{if(event.target===lightbox)closePreview();});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!lightbox.hidden)closePreview();});
