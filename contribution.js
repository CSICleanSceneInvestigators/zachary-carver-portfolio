"use strict";
const grid=document.getElementById("contributionGrid");
if(grid){
 const levels=[];
 let seed=416;
 const rand=()=>{seed=(seed*9301+49297)%233280;return seed/233280};
 for(let col=0;col<53;col+=1){for(let row=0;row<7;row+=1){const n=rand();const level=n>.84?4:n>.62?3:n>.35?2:n>.16?1:0;levels.push(level)}}
 levels.forEach((level,index)=>{const cell=document.createElement("span");cell.className="contribution-cell";cell.dataset.level=String(level);cell.dataset.index=String(index);cell.setAttribute("aria-hidden","true");grid.appendChild(cell)});
 const cells=[...grid.children];
 let timer;
 const animate=()=>{
  cells.forEach(cell=>cell.classList.remove("live"));
  const count=Math.random()>.72?2:1;
  const start=Math.floor(Math.random()*53);
  for(let i=0;i<count;i+=1){const column=(start+i)%53;const row=Math.floor(Math.random()*7);const cell=cells[column*7+row];cell.dataset.level="4";void cell.offsetWidth;cell.classList.add("live")}
  timer=window.setTimeout(animate,1100+Math.random()*1400);
 };
 const block=document.querySelector(".contribution-story");
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting&&!timer)animate();else if(!entry.isIntersecting&&timer){clearTimeout(timer);timer=null}}),{threshold:.2});
 observer.observe(block);
}
