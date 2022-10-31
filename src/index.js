import getDataFromPixabay from './js/axiosPixabay';
import Refs from './js/refs';
import { createMarkup, clearMarkup } from './js/markup';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
  madeMarkup(name, page);
  refs.loadMoreBtn.removeAttribute('disabled');
}

function onLoadMore() {
  page += 1;
  madeMarkup(name, page);
}

async function madeMarkup(n, p) {
  try {
    const dataImage = await getDataFromPixabay(n, p);
    await createMarkup(dataImage);
  } catch (err) {
    console.log(err);
  }
}
