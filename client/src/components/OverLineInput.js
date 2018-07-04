import React, { Component } from 'react';

class OverLineInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: props.className,
    }
  }

  		// window.print();

  render() {
    return (
      <div className={`overline-input ${this.state.className}`}>
        <span>
          {this.props.children}
        </span>
      </div>
    );
  }
}

export default OverLineInput;
