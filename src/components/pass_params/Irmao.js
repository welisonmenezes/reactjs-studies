import React, { Component } from 'react';

class Irmao extends Component {

  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
      <div>
        <h3>Componente irmão</h3>
        <p>dados do irmão: {this.props.dataFromBrother}</p>
      </div>
    );
  }

}

export default Irmao;