import './styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import App from './components/App'
import Content from './components/Content'
import Redux from './components/redux'
import Private from './components/util/Private'

ReactDOM.render(
  <Redux>
    <Router>
      <div className="app">
        <Route exact path="/" component={App} />
        <Switch>
          <Private exact path="/content" component={Content} />
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