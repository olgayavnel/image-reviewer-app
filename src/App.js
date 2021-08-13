import { useFetchRandomImage } from './utils/useFetchRandomImage';
import ImageReviewerWrapper from './components/imageReviewer/ImageReviewerWrapper';
import Spinner from './components/genericComponents/Spinner';
import GlobalStyle from './globalStyles';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  const [isLoading, randomImage, generateNewRandomImageArray] =
    useFetchRandomImage();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {randomImage && (
        <ErrorBoundary>
          <GlobalStyle />
          <ImageReviewerWrapper
            randomImage={randomImage}
            generateNewRandomImageArray={generateNewRandomImageArray}
          />
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
