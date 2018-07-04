import React, { Component } from 'react';

class ProposalTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  		// window.print();

  render() {
    return (
      <div className='header off-red' contentEditable="true" suppressContentEditableWarning>
        <h1 className=''>Hernan De La Via</h1>
        <h2>Contractor</h2>
        <div className='address-container'>
          <div className='address'>801 S Randolph St.</div>
          <div className='address'>Arlington, VA 22204</div>
        </div>
        <div>(571)275-2063</div>
      </div>
    );
  }
}

export default ProposalTemplate;
