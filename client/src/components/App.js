import React from 'react';
import ProposalTemplate from './ProposalTemplate';
import { RoundButton } from './common';

const App = () => (
  <div>
    <ProposalTemplate />
    <ProposalTemplate />
    <RoundButton onClick={() => console.log('click')}>
      +
    </RoundButton>
  </div>

);

export default App;
