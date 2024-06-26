import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as i}from"./assets/vendor-10cb7c31.js";const a=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"}],e=document.querySelector("ul.gallery"),t=a.map(o=>`<li class="gallery-item">
	    <a class="gallery-link" href="${o.original}">
		    <img 
          class="gallery-image" 
			    src="${o.preview}" 
			    alt="${o.description}" 
			  />
	    </a>
    </li>`).join("");e.insertAdjacentHTML("beforeend",t);new i(".gallery a",{captionsData:"alt",captionsDelay:250,captionsPosition:"bottom"});console.log(a);
//# sourceMappingURL=commonHelpers.js.map
