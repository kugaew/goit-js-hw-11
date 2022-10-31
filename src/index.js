import getDataFromPixabay from './js/axiosPixabay';
import Refs from './js/refs';
import { makeMarkup, clearMarkup } from './js/markup';

const refs = new Refs();

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.elements.searchQuery.value;

  if (!name) {
    console.log('Input field is empty');
    return;
  }

  clearMarkup(refs.gallery);
  getDataFromPixabay(name).then(makeMarkup).catch(console.log);
}
