import Refs from './refs';
import markupImages from './templates/pfotoCards.hbs';

const refs = new Refs();

export function makeMarkup(data) {
  refs.gallery.insertAdjacentHTML('beforeend', markupImages(data.imagesArr));
  console.log(data.totalHits);
}

export function clearMarkup() {
  refs.gallery.innerHTML = '';
}
