import getDataFromPixabay from './js/axiosPixabay';
import Refs from './js/refs';
import markupImages from './js/templates/pfotoCards.hbs';

const refs = new Refs();

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.elements.searchQuery.value;

  /* const {
    elements: { searchQuery },
  } = e.currentTarget; */

  if (!name) {
    console.log('Input field is empty');
    return;
  }

  getDataFromPixabay(name).then(marcup).catch(console.log);
}

function marcup(data) {
  refs.gallery.insertAdjacentHTML('beforebegin', markupImages(data));
}
