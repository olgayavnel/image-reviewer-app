import ImageReviewerWrapper from './features/imageReviewer/ImageReviewerWrapper';
import { useFetchRandomImage } from './utils/useFetchRandomImage';
import './App.css';
import Spinner from './features/imageReviewer/Spinner';

function App() {
  const [isLoading, randomImageUrl, generateNewRandomImage] =
    useFetchRandomImage();

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        {randomImageUrl && (
          <ImageReviewerWrapper
            randomImageUrl={randomImageUrl}
            generateNewRandomImage={generateNewRandomImage}
          />
        )}
      </>
    );
  }
}

export default App;
