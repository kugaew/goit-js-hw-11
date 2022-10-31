import axios from 'axios';
import getCurrentImagesInfo from './getCurrentImagesInfo';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '30983043-683b0db896a8d1a2bda356062';
const SOURCE = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const PER_PAGE = 40;
const ERR_EMPTY_RESP =
  'Sorry, there are no images matching your search query. Please try again.';

export default async function getImages(searchName, page) {
  try {
    const url = `${SOURCE}?key=${API_KEY}&q=${searchName}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&per_page=${PER_PAGE}&page=${page}`;
    const response = await axios.get(url);
    if (response.data.totalHits == 0) {
      throw new Error();
    }
    if (page === 1) {
      Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
    }
    /* return getCurrentImagesInfo(response.data.hits); */
    return {
      images: getCurrentImagesInfo(response.data.hits),
      totalHits: Number(response.data.totalHits),
      page,
      perPage: PER_PAGE,
    };
  } catch (err) {
    Notify.failure(ERR_EMPTY_RESP);
    console.log(err);
  }
}
