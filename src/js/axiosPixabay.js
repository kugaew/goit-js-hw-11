import axios from 'axios';
import getCurrentImagesInfo from './getCurrentImagesInfo';

const API_KEY = '30983043-683b0db896a8d1a2bda356062';
const SOURCE = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';

export default async function getImages(searchName) {
  try {
    const url = `${SOURCE}?key=${API_KEY}&q=${searchName}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;
    const response = await axios.get(url);
    /* return response.data.hits; */
    return getCurrentImagesInfo(response.data.hits);
  } catch (error) {
    console.error(error);
  }
}
