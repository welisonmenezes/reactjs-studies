import React, { Component } from 'react';

import { Button } from 'reactstrap';

class Lifecycle extends Component {

  constructor(props) {
    super(props);
    this.addInHtml('constructor');
    this.state = {
      count: 0
    };
  }

  render() {
    this.addInHtml('render')
    return (
      <div className="Lifecycle">
        <div className="App-header">
          <h2>Lifecycle testes</h2>
          <div>
            <Button color="primary" onClick={this.increment}>Increment</Button>
          </div>
          <div id="cycleDebug"></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.addInHtml('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.addInHtml('componentDidUpdate');
  }

  componentWillUnmount() {
    this.addInHtml('componentWillUnmount');
  }

  addInHtml(text) {
    const cycleDebug = document.getElementById('cycleDebug');
    if (cycleDebug) { // chamado após o retorno do render
      const myDiv = document.createElement('div');
      myDiv.innerHTML = text;
      cycleDebug.appendChild(myDiv);
      console.log(text);
    } else { // chamado antes do retorno do render
      console.log(text);
    }

  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
}

export default Lifecycle;
