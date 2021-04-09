import { Box, Button, Grommet } from 'grommet';
import React, { useState } from 'react';

import Photo from './Photo';
import { grommet } from 'grommet/themes';

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
  // render result of fetch
  return (
    <Grommet theme={grommet}>
      <Box
        direction="column"
        justify="center"
        align="center"
        pad="small"
        gap="medium"
      >
        <h3>Awesome Cat</h3>
        <Photo url={pictureUrl} />
        <Button label="Get a Cutie" onClick={getImage} color="primary" />
      </Box>
    </Grommet>
  );
};

// export Kitten
export default Kitten;
