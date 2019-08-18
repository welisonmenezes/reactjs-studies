import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//import Home from './home/Home.js';
//import Sobre from './sobre/Sobre';
//import Pagina404 from './pagina404/Pagina404';
import Navigation from './components/shared/navigation/Navigation';
import Pai from './components/pass_params/Pai';
import Home from './components/home/Home';
import Pagina404 from './components/pagina404/Pagina404';
import Lifecycle from './components/lifecycle/Lifecycle';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/pass-params" exact={true} component={Pai} />
            <Route path="/lifecycle" exact={true} component={Lifecycle} />
            <Route path='*' component={Pagina404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
