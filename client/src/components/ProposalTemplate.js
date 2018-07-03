import React, { Component } from 'react';

class ProposalTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  		// window.print();

  render() {
    return (
      <div className='templateContainer page' contenteditable="true">
        <h1>proposal</h1>
      </div>
    );
  }
}

export default ProposalTemplate;
