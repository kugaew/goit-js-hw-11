import Refs from './refs';
import markupImages from './templates/pfotoCards.hbs';
import markupSimpleLightBox from './templates/simpleLb.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import simpleLightbox from 'simplelightbox';

const refs = new Refs();

export function makeMarkup(data) {
  const { images, totalHits, page, perPage } = data;

  /* refs.gallery.insertAdjacentHTML('beforeend', markupImages(images)); */
  refs.gallery.insertAdjacentHTML('beforeend', markupSimpleLightBox(images));

  let gallery = new simpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionDelay: '250',
    captionsData: 'alt',
  });

  gallery.on('show.simplelightbox', function () {});

  if (page > 1) {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 3,
      behavior: 'smooth',
    });
  }

  if (!isNotEnd(totalHits, page, perPage)) {
    Notify.info("We're sorry, but you've reached the end of search results.");
    refs.loadMoreBtn.setAttribute('disabled', 'true');
  }
}

export function clearMarkup() {
  refs.gallery.innerHTML = '';
}

function isNotEnd(totalHits, page, perPage) {
  return totalHits > page * perPage;
}
