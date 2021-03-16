import React, { useState } from 'react';

import Photo from './Photo';

// create Kitten component
const Kitten = () => {
  const [picture, setPicture] = useState(0);

  // get kitten picture
  function getImage() {
    fetch('http://www.placekitten.com/600/300', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => {
      console.log('response', response);
      if (!response.ok) {
        throw Error('Error fetching your cutie');
      }
      return (response) =>
        response
          .text()
          .then((text) => console.log(text))
          .json()
          .then((allData) => {
            setPicture({ photos: allData });
          })
          .catch((err) => {
            throw Error(err.message);
          });
    });
  }

  return (
    <div>
      <h3>Awesome Cat</h3>
      <div className="displayFlex">
        <Photo photos={picture.url} />
        <button onClick={getImage}>Get a Cutie</button>
      </div>
    </div>
  );
};

// render result of fetch

// export Kitten
export default Kitten;
