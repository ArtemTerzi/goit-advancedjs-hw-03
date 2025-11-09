import{S as f,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=o=>{const l=new URLSearchParams({key:"33730392-00e87f60b0c2dabc7d687ed2e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${l}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},y=o=>o.reduce((l,{webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:p,downloads:m})=>l+`
      <li class="gallery-item">
        <a class="gallery-link" href=${a}>
          <img
            class="gallery-image"
            src=${r}
            alt=${e}
          />
        <ul class="item-details">
            <li class="item-detail">
              <p>Likes</p>
              <span>${t}</span>
            </li>
            <li class="item-detail">
              <p>Views</p>
              <span>${s}</span>
            </li>
            <li class="item-detail">
              <p>Comments</p>
              <span>${p}</span>
            </li>
            <li class="item-detail">
              <p>Downloads</p>
              <span>${m}</span>
            </li>
        </ul>
        </a>
      </li>`,""),i={galleryEl:document.querySelector(".gallery"),inputEl:document.querySelector(".form-input"),formEl:document.querySelector(".form"),loaderEl:document.querySelector(".loader")};let g=new f(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:250,scrollZoom:!1});const u={title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"},n=()=>i.loaderEl.classList.toggle("is-active"),h=o=>{o.preventDefault(),i.galleryEl.innerHTML="",n();const l=i.inputEl.value.trim();if(i.inputEl.value="",l.length===0){c.error(u),n();return}d(l).then(r=>{if(r.hits.length===0)throw new Error(message);i.galleryEl.innerHTML=y(r.hits),g.refresh()}).catch(r=>{c.error(u),console.dir(r)}).finally(()=>n())};i.formEl.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
