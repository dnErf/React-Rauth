import './styles/style.css'
import './styles/style.js'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Redux , { authConnect , contentConnect } from './redux'

import App from './components/App'
import Content from './components/Content'
import Private from './util/Private'

const PrivateRoute = authConnect(Private)
const composedApp = authConnect(App)
const composedContent = contentConnect(Content)

ReactDOM.render(
  <Redux>
    <Router>
      <div className="app">
        <Route exact path="/" component={composedApp} />
        <Switch>
          <PrivateRoute exact path="/content" component={composedContent} />
        </Switch>
      </div>
    </Router>
  </Redux>
  , document.getElementById('root')
)

// <Route exact path="/" component={composedApp} />
// <Switch>
// <PrivateRoute exact path="/content" component={composedContent} />
// </Switch>