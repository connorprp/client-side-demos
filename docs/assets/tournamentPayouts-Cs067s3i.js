import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                */const s=document.getElementById("numPlaces"),u=document.getElementById("potAmount"),v=document.getElementById("submitPot"),p=document.getElementById("result"),c=document.getElementById("table"),y=document.getElementById("clear");document.addEventListener("DOMContentLoaded",()=>{m(s.value)});s.addEventListener("change",()=>{m(s.value)});v.addEventListener("click",()=>{f()});y.addEventListener("click",()=>{c.innerHTML="",p.setAttribute("hidden","true"),c.setAttribute("hidden","true"),s.value=1,u.value="",m(1)});function m(a){document.querySelectorAll('input[id^="place"]').forEach(e=>e.remove());for(let e=0;e<a;e++){let o="";switch(e){case 0:o="st";break;case 1:o="nd";break;case 2:o="rd";break;default:o="th";break}const l=document.createElement("input");l.setAttribute("type","number"),l.setAttribute("id",`place${e}`),l.setAttribute("placeholder",`${e+1}${o} Place`),l.setAttribute("style","display: block; margin-bottom: 10px; margin-left: auto; margin-right: auto;"),l.setAttribute("required",""),document.body.appendChild(l)}}const f=()=>{const a=document.querySelectorAll('input[id^="place"]'),t=[];a.forEach(e=>t.push(e.value)),u.value===""?alert("Please enter the total pot amount"):i(t)!==100?alert("Please ensure the percent allocations total 100%"):g(t)},i=a=>{let t=0;return a.forEach(e=>t+=parseInt(e)),t},g=a=>{let t=[],e=[],o=[],l=[];a.forEach(n=>t.push(parseFloat(n)));for(let n=0;n<t.length;n++)e.push(u.value/100*t[n]);e.forEach(n=>{o.push(n-(n-Math.floor(n))),l.push(n-Math.floor(n))}),console.log(i(l)),A(t,o,l)},A=(a,t,e)=>{c.innerHTML="";const o=document.createElement("tr"),l=document.createElement("th");l.textContent="Place";const n=document.createElement("th");n.textContent="Percent";const h=document.createElement("th");h.textContent="Payout",o.appendChild(l),o.appendChild(n),o.appendChild(h),c.appendChild(o);for(let r=0;r<a.length;r++){const d=document.createElement("tr"),E=document.createElement("td");E.textContent=`${r+1}`,d.appendChild(E);const b=document.createElement("td");b.textContent=`${a[r]}%`,d.appendChild(b);const C=document.createElement("td");C.textContent=`$${t[r].toFixed(2)}`,d.appendChild(C),c.appendChild(d)}p.removeAttribute("hidden"),c.removeAttribute("hidden"),console.log(i(e)),p.innerHTML=`Payout total: $${parseFloat(u.value).toFixed(2)} <br> Left Over: $${(u.value-i(t)).toFixed(2)}`};
