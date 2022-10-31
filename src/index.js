import getDataFromPixabay from './js/axiosPixabay';
import Refs from './js/refs';
import { makeMarkup, clearMarkup } from './js/markup';

const refs = new Refs();
refs.loadMoreBtn.setAttribute('disabled', 'true');
let page = '';
let name = '';

refs.form.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSubmit(e) {
  e.preventDefault();
  name = e.currentTarget.elements.searchQuery.value;

  if (!name) {
    console.log('Input field is empty');
    return;
  }

  page = 1;

  clearMarkup(refs.gallery);
  getDataFromPixabay(name, page).then(makeMarkup).catch(console.log);
  refs.loadMoreBtn.removeAttribute('disabled');
}

function onLoadMore() {
  page += 1;
  getDataFromPixabay(name, page).then(makeMarkup).catch(console.log);
}
