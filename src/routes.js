import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'

export default function Routes() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  )
}
