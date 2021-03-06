export const getPosterPath = (path, width) => {
  const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w${width}`;

  // get relative path to image and convert to absolute path
  return `${IMAGE_BASE_URL}${path}`;
};
