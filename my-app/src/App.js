import './App.css';

import { Box, Tab, Tabs } from 'grommet';

import Kitten from './components/Kitten';
import Puppy from './components/Puppy';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab title="Fetch a Kitty">
          <Box pad="medium">
            <Kitten />
          </Box>
        </Tab>
        <Tab title="Fetch a Puppy">
          <Box pad="medium">
            <Puppy />
          </Box>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
