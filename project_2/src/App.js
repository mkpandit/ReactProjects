import React, { Component } from 'react';
import './css/style.css';
import Content from './components/Content'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
