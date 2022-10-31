import Refs from './refs';
import markupImages from './templates/pfotoCards.hbs';

const refs = new Refs();

export function makeMarkup(data) {
  const { images, totalHits, page, perPage } = data;
  refs.gallery.insertAdjacentHTML('beforeend', markupImages(images));
  if (!isNotEnd(totalHits, page, perPage)) {
    refs.loadMoreBtn.setAttribute('disabled', 'true');
  }
}

export function clearMarkup() {
  refs.gallery.innerHTML = '';
}

function isNotEnd(totalHits, page, perPage) {
  return totalHits > page * perPage;
}
