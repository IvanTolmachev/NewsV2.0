!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequiref757;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequiref757=r),r("iE7OH").register(JSON.parse('{"1Z6Xn":"favorite.1c0f1008.js","k5HmC":"icon.a66ccba6.svg","2AOeO":"favorite.1f877d72.js"}')),r("5cZWW"),r("4fDmg"),r("1ldjK"),r("6n1nm");var s=r("9HPth"),i=r("gEqtN");const o="readNews",n=document.querySelector(".gallery"),l=document.querySelector(".errorRequest");var c;c=r("aNJCr").getBundleURL("1Z6Xn")+r("iE7OH").resolve("k5HmC");const d=new URL(c),u=JSON.parse(localStorage.getItem("favoriteNews"));function f(e){if(!Boolean(u))return void l.classList.remove("visually-hidden");let t="";t=e.map((({id:e,section:t,imgUrl:a,title:r,abstract:s,newDateStr:i,url:o})=>`<li class="card js-card-item" data-target-id=${e}>\n        <div class="wrap-image">\n          <img\n            src="${a}"\n            alt="photo"\n            class="wrap-image__photo"\n          />\n          <p class="wrap-image__text">${t}</p>\n          <button type="button"  class="wrap-image__btn js-is-favorite">\n            <span class="wrap-image__btn-text js-is-favorite">Remove from favorite</span>\n              <svg class="js-is-favorite fill-heard" width="16" height="16">\n                <use class="js-is-favorite" href ='${d}#icon-heart'></use>\n              </svg>\n          </button>\n        \n        </div>\n            <h2 class="card__title">${r}</h2>\n            <p class="card__description">${s.length>112?s.slice(0,113)+"...":s}</p>\n            <p class="wrap-info__time">${i}</p>\n            <a href="${o}" class="wrap-info__link" target="_blank" rel="noreferrer noopener">Read more</a>\n            <p class="wrap-image__active visually-hidden">Already read</p>\n      </li>`)).join(""),n.innerHTML=t,(0,s.checkRead)(o)}f(u),n.addEventListener("click",(e=>{i.arrLastData.length=0,i.arrLastData.push(...u),(0,s.addRead)(e)}));const v="favoriteNews",g=document.querySelector(".gallery"),p=document.querySelector(".errorRequest");g.addEventListener("click",(function(e){if(e.target.classList.contains("js-is-favorite")){!function(e){const t=document.querySelector(`li[data-target-id='${e}'] span.js-is-favorite`),a=document.querySelector(`li[data-target-id='${e}'] button.js-is-favorite`),r=document.querySelector(`li[data-target-id='${e}'] svg.js-is-favorite`),s=document.querySelector(`li[data-target-id='${e}'] use.js-is-favorite`),i=document.querySelector(`li[data-target-id='${e}']`);let o=JSON.parse(localStorage.getItem(v));const n=o.findIndex((t=>t.id===e));o.splice(n,1),localStorage.setItem(v,JSON.stringify(o)),o=JSON.parse(localStorage.getItem(v)),0===o.length&&(localStorage.removeItem(v),p.classList.remove("visually-hidden"));t.classList.replace("js-is-favorite","js-tartet-favorite"),a.classList.replace("js-is-favorite","js-tartet-favorite"),r.classList.replace("js-is-favorite","js-tartet-favorite"),s.classList.replace("js-is-favorite","js-tartet-favorite"),i.remove()}(e.target.closest(".js-card-item").dataset.targetId)}}));const m=JSON.parse(localStorage.getItem("favoriteNews")),h=document.querySelector(".errorRequest");document.querySelector(".search-form").addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim();if(!Boolean(t))return f(m),void h.classList.add("visually-hidden");let a="",r=[];a=m.map((({id:e,section:a,imgUrl:s,title:i,abstract:o,newDateStr:n,url:l})=>{i.toLowerCase().includes(t.toLowerCase())&&r.push({id:`${e}`,url:`${l}`,title:`${i}`,section:`${a}`,abstract:`${o}`,newDateStr:`${n}`,imgUrl:`${s}`})})),f(r),0===r.length&&h.classList.remove("visually-hidden")}))}();
//# sourceMappingURL=favorite.1c0f1008.js.map
