import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ENDPOINT } from './constants';

export function useFetchRandomImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [randomImages, setRandomImage] = useState({});

  const rejectedImageList = useSelector(
    (state) => state.images.rejectedImageList
  );

  function generateNewRandomImage() {
    setIsLoading(true);
    fetch(ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // checking if item was already rejected before
        const newId = data.id;
        const rejectedImageListIds = rejectedImageList.map((image) => image.id);
        if (rejectedImageListIds.includes(newId)) {
          // fetch again
          generateNewRandomImage();
          return;
        }
        setIsLoading(false);
        setRandomImage({ id: data.id, randomImageUrl: data.urls.regular });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  // do it right away once
  useEffect(generateNewRandomImage, []);

  return [isLoading, randomImages, generateNewRandomImage];
}
