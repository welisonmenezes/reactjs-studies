import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Filho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countBrother: 0
        };
    }

    sonFunction = () => {
        this.setState({ count: this.state.count + 1 });
        this.props.callbackFromParent(this.state.count);
    };

    brotherFunction = () => {
        this.setState({ countBrother: this.state.countBrother + 1 });
        this.props.callbackFromParentToBrother(this.state.countBrother);
    };

  render() {
        return (
            <div>
                <h3>Componente filho</h3>
                <p>dados do pai: { this.props.dataFromParent }</p>
                <Button color="primary" onClick={this.sonFunction}>Enviar dados para o pai.</Button>
                <br /><br />
                <Button color="info" onClick={this.brotherFunction}>Enviar dados para o irmão.</Button>
            </div>
        );
  }

}

export default Filho;