import GlobalStyle from './globalStyles';
import Spinner from './components/Spinner';
import Wrapper from './components/Wrapper/Wrapper';
import { useFetchRandomImage } from './hooks/useFetchRandomImage';

function App() {
  const [isLoading, randomImage, generateNewRandomImage] =
    useFetchRandomImage();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {randomImage && (
        <>
          <GlobalStyle />
          <Wrapper
            randomImage={randomImage}
            generateNewRandomImage={generateNewRandomImage}
          />
        </>
      )}
    </>
  );
}

export default App;
