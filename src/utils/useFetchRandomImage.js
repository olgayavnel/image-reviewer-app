import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ENDPOINT } from './constants';

export function useFetchRandomImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [randomImageUrl, setRandomImgUrl] = useState('');

  /** the useSelector hook lets our component extract whatever pieces of data it needs
   * from the Redux store state.
   */
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
        const newUrl = data.urls.regular;
        if (rejectedImageList.includes(newUrl)) {
          // fetch again
          generateNewRandomImage();
          return;
        }
        setIsLoading(false);
        setRandomImgUrl(data.urls.regular);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  // do it right away once
  useEffect(generateNewRandomImage, []);

  return [isLoading, randomImageUrl, generateNewRandomImage];
}
