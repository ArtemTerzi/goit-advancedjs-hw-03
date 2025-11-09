export const fetchPhotosByQuery = q => {
  const fetchParamms = new URLSearchParams({
    key: '33730392-00e87f60b0c2dabc7d687ed2e',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${fetchParamms}`).then(response => {
    if (!response.ok) throw new Error(response.status);

    return response.json();
  });
};
