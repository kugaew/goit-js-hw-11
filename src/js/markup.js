import Refs from './refs';
import markupImages from './templates/pfotoCards.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = new Refs();

export function makeMarkup(data) {
  const { images, totalHits, page, perPage } = data;

  refs.gallery.insertAdjacentHTML('beforeend', markupImages(images));

  if (page > 1) {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 1,
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
