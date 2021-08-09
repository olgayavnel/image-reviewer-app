import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageReviewerWrapper from './features/imageReviewer/ImageReviewerWrapper';

function App() {
  const [loading, randomImageUrl, generateNewRandomImage] =
    useFetchRandomImage();

  return (
    <>
      {randomImageUrl && (
        <ImageReviewerWrapper
          imageList={[randomImageUrl]}
          generateNewRandomImage={generateNewRandomImage}
        />
      )}
    </>
  );
}

export default App;

const CLIENT_ID = 's-FByqtV_QBpcbqo_5yofSyHl_mVGo0uQbTQtquCNK0';
const ENDPOINT = `https://api.unsplash.com/photos/random/?client_id=${CLIENT_ID}`;

// import {atom} from 'jotai'

// const randomImageUrlAtom = atom("")

function useFetchRandomImage() {
  const [loading, setLoading] = useState(false);
  const [randomImageUrl, setImgUrl] = useState('');

  const rejectedImageList = useSelector(
    (state) => state.images.rejectedImageList
  );

  function fetchAndSaveRandomImage() {
    setLoading(true);
    fetch(ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newUrl = data.urls.regular;
        if (rejectedImageList.includes(newUrl)) {
          // fetch again
          fetchAndSaveRandomImage();
          return;
        }
        setLoading(false);
        setImgUrl(data.urls.regular);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  // do it right away once
  useEffect(fetchAndSaveRandomImage, []);

  return [loading, randomImageUrl, fetchAndSaveRandomImage];
}
