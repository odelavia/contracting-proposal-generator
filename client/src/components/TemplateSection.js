import React, { Component } from 'react';

class ProposalTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      className: props.className,
    }
  }

  		// window.print();

  render() {
    return (
      <div
        className={`template-section ${this.state.className}`}
        contentEditable="true"
        suppressContentEditableWarning
        id={this.state.id}
      >
      {this.props.children}
      </div>
    );
  }
}

export default ProposalTemplate;
