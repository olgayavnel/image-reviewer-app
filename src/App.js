import { useFetchRandomImage } from './utils/useFetchRandomImage';
import ImageReviewerWrapper from './components/imageReviewer/ImageReviewerWrapper';
import Spinner from './components/genericComponents/Spinner';
import GlobalStyle from './globalStyles';

function App() {
  const [isLoading, randomImageUrl, generateNewRandomImage] =
    useFetchRandomImage();

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        {randomImageUrl && (
          <>
            <GlobalStyle />
            <ImageReviewerWrapper
              randomImageUrl={randomImageUrl}
              generateNewRandomImage={generateNewRandomImage}
            />
          </>
        )}
      </>
    );
  }
}

export default App;
