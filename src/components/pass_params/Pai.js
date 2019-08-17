import React, { Component } from 'react';

import { Button } from 'reactstrap';

import Filho from './Filho';
import Irmao from './Irmao';

import './Pai.css';

class Pai extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFromChild: 0,
            count: 0,
            dataToBrother: 0
        };
    }

    parentCallback = (dataFromChild) => {
        this.setState({ dataFromChild });
    }

    sendToChild = () => {
        this.setState({ count: this.state.count + 1 });
    };

    fromSonToBrother = (dataToBrother) => {
        this.setState({ dataToBrother });
    };
    

  render() {
    return (
        <div className="col-pai">
            <div className="row row-1">
                <div className="col-md-12">
                    <h3>Componente pai</h3>
                    dados do filho: { this.state.dataFromChild }
                    <div>
                        <Button color="secondary" onClick={this.sendToChild}>Enviar dados para o filho.</Button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-filho">
                    <Filho callbackFromParent={this.parentCallback} dataFromParent={this.state.count} callbackFromParentToBrother={this.fromSonToBrother} />
                </div>
                <div className="col-md-6 col-irmao">
                    <Irmao dataFromBrother={this.state.dataToBrother} />
                </div>
            </div>
        </div>
    );
  }

}

export default Pai;