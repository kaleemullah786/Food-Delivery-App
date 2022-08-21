import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
          <Router>
            <Navbar />
              <Routes>
                <Route exact path="/" element={<MainContainer />} />
                <Route exact path="/createItem" element={<CreateContainer />} />
              </Routes>
          </Router>
      </>
    )
  }
}

