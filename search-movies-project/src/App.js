import React, { Component } from 'react';

import { Detail } from './pages/Details'
import { Home } from './pages/Home'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  render(){
    const url = new URL(document.location)
    const Page = url.searchParams.has('id') ? <Detail id={url.searchParams.get('id')}></Detail> : <Home></Home>

    return (
      <div className="App">
        {Page}
      </div>
    );
  }
}

export default App;
