import { Box, Button, Grommet, TextInput } from 'grommet';
import React, { useState } from 'react';

import Photo from './Photo';
import axios from 'axios';
import { grommet } from 'grommet/themes';

// create puppy component
const Puppy = () => {
  // get puppy picture with axios
  // const axios = require('axios'); common JS import

  const [pictureUrl, setPictureUrl] = useState('');

  function getImage() {
    axios({
      method: 'get',
      url: 'https://place-puppy.com/300x300',
    }).then(function (response) {
      setPictureUrl(response.config.url);
    });
  }

  const [value, setValue] = useState('');

  const onInput = (event) => setValue(event.target.value);

  // listen for submit of input value

  // take submitted value and render X image blocks

  // create forEach to map over the array of X images

  // image box to reuse

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

        <Box width="xsmall">
          <TextInput value={value} onChange={onInput} />
        </Box>
        <Button
          label="Get a Cutie"
          onChange={getImage}
          type="submit"
          color="primary"
        />
      </Box>
    </Grommet>
  );
};
// export puppy
export default Puppy;
