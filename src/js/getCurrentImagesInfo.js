export default function getCurrentImagesInfo(images) {
  return images.map(image => {
    return {
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
      likes: image.likes,
      views: image.views,
      comments: image.comments,
      downloads: image.downloads,
    };
  });
}
