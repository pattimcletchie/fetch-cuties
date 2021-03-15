import React from 'react';

// create Kitten component
const Kitten = () => {
  async function storedImageUrl() {
    const response = await fetch('http://placekitten.com/600/300');
    const catUrl = response.url;
    return catUrl;
    // .then(
    //   (data) => {
    //     const imageUrl = data.url;
    //     return imageUrl;
    //   }
    // );
  }

  const imagePath = storedImageUrl().then((response) => console.log(response));

  return (
    <div>
      <h3>Awesome Cat</h3>
      <div className="displayFlex">
        <img src={imagePath} alt="awesome cutie" />
        <button>Get a Cutie</button>
      </div>
    </div>
  );
};

// get kitten picture
// render result of fetch

// export Kitten
export default Kitten;
