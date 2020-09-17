import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Login</Link>
          <Link to="/portfolio">Login</Link>
        </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      </div>
    </Router>
  )
}

export default App
