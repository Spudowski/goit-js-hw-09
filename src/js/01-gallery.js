import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './images';
  
  const gallery = document.querySelector('ul.gallery');
  const createGallery = images.map((item) => 
    `<li class="gallery-item">
	    <a class="gallery-link" href="${item.original}">
		    <img 
          class="gallery-image" 
			    src="${item.preview}" 
			    alt="${item.description}" 
			  />
	    </a>
    </li>`
  ).join('');

  gallery.insertAdjacentHTML('beforeend', createGallery);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
    captionsPosition: 'bottom',
  });

  console.log(images);