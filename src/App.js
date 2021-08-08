import ReviewerWrapper from './Components/ReviewerWrapper';
import { useState, useEffect } from 'react';

function App() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    let clientID = '12nQgPUTls3doSFIK6UFHBp-Xap2DqGYtCNvprFKoY0';
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageList(data.urls.regular);
        console.log(data.urls.regular);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }, []);

  return <>{imageList && <ReviewerWrapper imageList={imageList} />}</>;
}

export default App;
