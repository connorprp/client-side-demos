import"./modulepreload-polyfill-B5Qt9EMX.js";const t=document.getElementById("number"),a=document.getElementById("convert-btn"),n=document.getElementById("output");a.addEventListener("click",()=>{t.value?t.value<1?n.innerText="Please enter a number greater than or equal to 1":t.value>3999?n.innerText="Please enter a number less than or equal to 3999":n.innerText=s(t.value):n.innerText="Please enter a valid number."});function s(r){const o=[],l=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],u=[1e3,900,500,400,100,90,50,40,10,9,5,4,1];for(;r>0;)for(let e=0;e<l.length;e++)if(r-u[e]>=0){o.push(l[e]),r-=u[e];break}return o.join("")}
