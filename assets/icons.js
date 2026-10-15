(()=>{var D=(e,o,r=[])=>{let f=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(o).forEach(t=>{f.setAttribute(t,String(o[t]))}),r.length&&r.forEach(t=>{let l=D(...t);f.appendChild(l)}),f},L=([e,o,r])=>D(e,o,r);var v=e=>Array.from(e.attributes).reduce((o,r)=>(o[r.name]=r.value,o),{}),U=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",O=e=>e.flatMap(U).map(r=>r.trim()).filter(Boolean).filter((r,f,t)=>t.indexOf(r)===f).join(" "),H=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(o,r,f)=>r.toUpperCase()+f.toLowerCase()),s=(e,{nameAttr:o,icons:r,attrs:f})=>{let t=e.getAttribute(o);if(t==null)return;let l=H(t),A=r[l];if(!A)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let M=v(e),[y,b,T]=A,B={...b,"data-lucide":t,...f,...M},F=O(["lucide",`lucide-${t}`,M,f]);F&&Object.assign(B,{class:F});let q=L([y,B,T]);return e.parentNode?.replaceChild(q,e)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var u=["svg",a,[["path",{d:"M20 6 9 17l-5-5"}]]];var d=["svg",a,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];var p=["svg",a,[["path",{d:"M5 12h14"}]]];var m=["svg",a,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];var x=["svg",a,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];var i=["svg",a,[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"}],["path",{d:"m7.5 4.27 9 5.15"}]]];var n=["svg",a,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];var c=["svg",a,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];var C=["svg",a,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];var h=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];var g=["svg",a,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];var S=["svg",a,[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]]];var w=["svg",a,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];var P=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];var k=["svg",a,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];var R=({icons:e={},nameAttr:o="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let f=document.querySelectorAll(`[${o}]`);if(Array.from(f).forEach(t=>s(t,{nameAttr:o,icons:e,attrs:r})),o==="data-lucide"){let t=document.querySelectorAll("[icon-name]");t.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(t).forEach(l=>s(l,{nameAttr:"icon-name",icons:e,attrs:r})))}};var E={ShoppingBag:g,LogOut:d,Search:h,PackageCheck:m,ShoppingCart:w,Plus:c,Package:i,Undo2:k,SearchX:C,ShoppingBasket:S,Trash2:P,Check:u,Pencil:n,PackageOpen:x,Minus:p};window.lucide={createIcons:()=>R({icons:E})};window.lucide.createIcons();})();
/*! Bundled license information:

lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/icons/check.js:
lucide/dist/esm/icons/log-out.js:
lucide/dist/esm/icons/minus.js:
lucide/dist/esm/icons/package-check.js:
lucide/dist/esm/icons/package-open.js:
lucide/dist/esm/icons/package.js:
lucide/dist/esm/icons/pencil.js:
lucide/dist/esm/icons/plus.js:
lucide/dist/esm/icons/search-x.js:
lucide/dist/esm/icons/search.js:
lucide/dist/esm/icons/shopping-bag.js:
lucide/dist/esm/icons/shopping-basket.js:
lucide/dist/esm/icons/shopping-cart.js:
lucide/dist/esm/icons/trash-2.js:
lucide/dist/esm/icons/undo-2.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
