import { useFetchRandomImage } from './utils/useFetchRandomImage';
import ImageReviewerWrapper from './components/imageReviewer/ImageReviewerWrapper';
import Spinner from './components/genericComponents/Spinner';
import GlobalStyle from './globalStyles';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  const [isLoading, randomImageUrl, generateNewRandomImage] =
    useFetchRandomImage();

  if (isLoading) {
    <ErrorBoundary>
      return <Spinner />;
    </ErrorBoundary>;
  }

  return (
    <>
      {randomImageUrl && (
        <ErrorBoundary>
          <GlobalStyle />
          <ImageReviewerWrapper
            randomImageUrl={randomImageUrl}
            generateNewRandomImage={generateNewRandomImage}
          />
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
