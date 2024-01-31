import{S as n}from"./assets/vendor-c9def49e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector(".search-input");document.querySelector(".search-form");document.querySelector(".gallery");fetch("https://pixabay.com/api/?key=42127236-8bfdbbfbeed8a2dadaca720e8&q=cat&image_type=photo&orientation=horizontal&safesearch=true").then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const o=i();console.log(o)}).catch(r=>{});function i(){return images.map(()=>`
   <li class="gallery-item">
  <a class="gallery-link" href="{{largeImageURL}}">
    <img class="gallery-image" src="{{webformatURL}}" alt="{{tags}}" />
  </a>
  <p class="galerry-text">likes: {{likes}}</p>
  <p class="galerry-text">views: {{views}}</p>
  <p class="galerry-text">comments: {{comments}}</p>
  <p class="galerry-text">downloads: {{downloads}}</p>
</li>
    `).join("")}new n(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
