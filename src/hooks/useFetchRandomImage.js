import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ENDPOINT } from './../constants/constants';

export function useFetchRandomImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [randomImage, setRandomImage] = useState({});

  const rejectedImageList = useSelector(
    (state) => state.images.rejectedImageList
  );

  const generateNewRandomImage = useCallback(() => {
    setIsLoading(true);
    fetch(ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newId = data.id;

        // checking if item was already rejected before
        const rejectedImageListIds = rejectedImageList.map((image) => image.id);
        if (rejectedImageListIds.includes(newId)) {
          // fetch again
          generateNewRandomImage();
        }

        setIsLoading(false);
        setRandomImage({ id: data.id, randomImageUrl: data.urls.regular });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }, [rejectedImageList]);

  // do it right away once
  useEffect(() => {
    generateNewRandomImage();
  }, [generateNewRandomImage]);

  return [isLoading, randomImage, generateNewRandomImage];
}
