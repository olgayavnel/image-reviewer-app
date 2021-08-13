import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ENDPOINT } from './constants';

export function useFetchRandomImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [randomImages, setRandomImage] = useState({});
  console.log(
    '🚀 ~ file: useFetchRandomImage.js ~ line 8 ~ useFetchRandomImage ~ randomImage',
    randomImages
  );

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
      .then((data) => {
        const imageObjects = clonedData.map((item) => {
          return { id: item.id, randomImageUrl: item.urls.regular };
        });

        setIsLoading(false);
        setRandomImage(imageObjects);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  // // validation if an image was rejected before
  // const newId = item.id;
  // const rejectedImageListIds = rejectedImageList.map((image) => image.id);
  // if (rejectedImageListIds.includes(newId)) {
  //   // fetch again
  //   generateNewRandomImageArray();
  //   return;
  // }

  // do it right away once
  useEffect(generateNewRandomImageArray, []);

  return [isLoading, randomImages, generateNewRandomImageArray];
}
