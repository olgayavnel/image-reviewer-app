import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ENDPOINT } from './constants';

export function useFetchRandomImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [randomImages, setRandomImages] = useState({});

  /** the useSelector hook lets our component extract whatever pieces of data it needs
   * from the Redux store state.
   */
  const rejectedImageList = useSelector(
    (state) => state.images.rejectedImageList
  );

  function generateNewRandomImageArray() {
    setIsLoading(true);
    fetch(ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {})
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  // do it right away once
  useEffect(generateNewRandomImageArray, []);

  return [isLoading, randomImages, generateNewRandomImageArray];
}
