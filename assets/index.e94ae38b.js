var d=Object.defineProperty;var l=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(l(r,typeof e!="symbol"?e+"":e,t),t);const m=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};m();const u=`.header{width:100%;height:8rem;display:flex;align-items:center}.header .header__content{display:flex;align-items:center;justify-content:space-between}.header .header__social{display:flex;align-items:center}.content{width:90%;margin:0 auto}
`;function c(r,e,t){const o=document.createElement(r),n=Object.entries(e);for(let[s,a]of n)o.setAttribute(s,a);return t&&o.append(...t),o}class p extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent=u;const t=c("header",{class:"header"}),o=c("div",{class:"content header__content"}),n=document.createElement("slot");o.appendChild(n),t.appendChild(o),this.shadowRoot.append(t,e)}}customElements.define("unova-header",p,{extends:"header"});const h=`.icon{padding:10px;border-radius:10px;border:1px solid #ddd;width:40px;aspect-ratio:1/1;margin-bottom:20px;display:flex;align-items:center;justify-content:center}.icon:hover{animation:shake .2s}@keyframes shake{0%{transform:rotate(0)}25%{transform:rotate(8deg)}50%{transform:rotate(0)}75%{transform:rotate(-8deg)}to{transform:rotate(0)}}
`;class f extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent=h;const t=document.createElement("slot"),o=c("div",{class:"icon"},[t]);this.shadowRoot.append(o,e)}}customElements.define("unova-icon",f);class g{constructor(){i(this,"URL","https://api.github.com/users/siomar")}request(e,t){const o={mode:"cors",cache:"default",...t};return fetch(`${this.URL}${e}`,o).then(n=>n.json())}get(e,t={method:"GET"}){return this.request(e,t)}post(e,t,o={method:"POST"}){return this.request(e,{...o,body:t})}}const y=new g;function x(){let r=document.createDocumentFragment();y.get("/repos").then(e=>{var t;e=b(e),e.map(o=>{const n=C(o.name,o.language,o.html_url);r==null||r.appendChild(n)}),(t=document.getElementById("repositories"))==null||t.appendChild(r)}).catch(E)}function E(r){var o;console.error(r);let e=document.createDocumentFragment(),t=document.createElement("p");t.innerText="Ops! Nenhum reposit\xF3rio encontrado no momento.",e==null||e.appendChild(t),(o=document.getElementById("repositories"))==null||o.appendChild(e)}function b(r){return r.filter(e=>e.language!==null)}function C(r="",e="",t=""){const o=document.createElement("h3");o.append(r);const n=document.createElement("p");return n.append(e),c("a",{class:"repository",href:t,target:"_blank"},[o,n])}x();