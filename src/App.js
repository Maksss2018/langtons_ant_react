import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
//import AntGrid from "./components/AntGrid";
import AntField from "./components/AntField";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <AntField/>
      </div>
    );
  }
}

export default App;
