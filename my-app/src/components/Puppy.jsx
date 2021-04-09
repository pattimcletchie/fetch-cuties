import { Box, Button, Grommet } from 'grommet';
import React, { useEffect, useState } from 'react';

import Photo from './Photo';
import axios from 'axios';
import { grommet } from 'grommet/themes';

// create puppy component
const Puppy = () => {
  // get puppy picture with axios
  const axios = require('axios');

  const [pictureUrl, setPictureUrl] = useState('');

  const url = 'https://place-puppy.com/300x300';

  function getImage() {
    axios({
      method: 'get',
      url: 'https://place-puppy.com/300x300',
      responseType: 'stream',
    }).then(function (response) {
      setPictureUrl(response.config.url);
    });
  }

  return (
    // render puppy
    <Grommet theme={grommet}>
      <Box
        direction="column"
        justify="center"
        align="center"
        pad="small"
        gap="medium"
      >
        <Photo url={pictureUrl} />
        <Button label="Get a Cutie" onClick={getImage} color="primary" />
      </Box>
    </Grommet>
  );
};
// export puppy
export default Puppy;
