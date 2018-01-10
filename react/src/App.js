import React, { Component } from 'react'
import './App.scss'
import logo from '../assets/logo.gif'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The qyii-parcel-react demo has started!</h1>
        </header>
        <p className="App-intro">
          To learn more, visit below
        </p>
        <ul className="qyii-list">
          <li><a href="https://parceljs.org/">parcel</a></li>
          <li><a href="https://reactjs.org/">react</a></li>
          <li><a href="https://github.com/qyii/parcelex">qyii's github</a></li>
        </ul>
      </div>
    )
  }
}

export default App
