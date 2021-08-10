import { useFetchRandomImage } from './utils/useFetchRandomImage';
import './App.css';
import ImageReviewerWrapper from './components/imageReviewer/ImageReviewerWrapper';
import Spinner from './components/genericComponents/Spinner';

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
