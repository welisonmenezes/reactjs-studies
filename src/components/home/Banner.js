import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    someFn = () => {
        //this.state.count++;
        this.setState({ count: this.state.count + 1 });
        //console.log(this.state.count);
        const listInfo = 'data from child'
        this.props.callbackFromParent(listInfo);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: ', prevState);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: ', prevState);
        return null;
    }
    
  render() {
      console.log(this.props.dataFromParent);
      //this.someFn();
    return (
      <div>
        <p>
            banner-here <b> { this.state.count } </b>
        </p>
        <Button color="primary" onClick={this.someFn}>Click aqui!</Button>
      </div>
    );
  }
}

export default Banner;
