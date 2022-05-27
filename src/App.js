import React from 'react'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Switch>

      </Switch>
    </Router>
    </>
  )
}

export default App