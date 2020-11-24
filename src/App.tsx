import React, { Component } from 'react';
import { Container } from 'reactstrap';
//import 'reactstrap/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header";
import AntField from "./components/AntField";
class App extends Component {
  render() {
    return (
      <Container fluid={true}>
          <Header />
          <AntField/>
      </Container>
    );
  }
}

export default App;
