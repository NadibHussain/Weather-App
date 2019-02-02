import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import List from './components/List';
import Search from './components/Search';
import Searchresult from './components/Searchresult';
import Searchwoeid from './components/Searchwoeid'
import Woeidresult from './components/Woeidresult';
class App extends Component {
 
  render() {
    const App = () => (
      <div className='container center'>
        <Search></Search>
        <Searchwoeid></Searchwoeid>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/search/:city' component={Searchresult}/>
          <Route path='/woeid/:id' component={Woeidresult}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;