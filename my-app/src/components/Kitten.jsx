import React, { useState } from 'react';

import Photo from './Photo';

// create Kitten component
const Kitten = () => {
  const [pictureUrl, setPictureUrl] = useState(null);

  // get kitten picture
  function getImage() {
    fetch('http://www.placekitten.com/600/300', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(
      (response) => {
        console.log('response', response);
        if (!response.ok) {
          throw Error('Error fetching your cutie');
        }
        setPictureUrl(response.url);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div>
      <h3>Awesome Cat</h3>
      <div className="displayFlex">
        <Photo url={pictureUrl} />
        <button onClick={getImage}>Get a Cutie</button>
      </div>
    </div>
  );
};

// render result of fetch

// export Kitten
export default Kitten;
