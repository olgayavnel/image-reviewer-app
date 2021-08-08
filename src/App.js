import ReviewerWrapper from './Components/ReviewerWrapper';
import { useState, useEffect } from 'react';

function App() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const url =
      'https://api.unsplash.com/search/photos?query=london&client_id=12nQgPUTls3doSFIK6UFHBp-Xap2DqGYtCNvprFKoY0';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageList(data);
      });
  }, []);

  return <>{imageList && <ReviewerWrapper imageList={imageList} />}</>;
}

export default App;
