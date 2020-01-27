import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const Duckvador = () => (
  <div>
    <h1>Duck Vador Page</h1>
  </div>
)
function App () {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="shop/duckvador" component={Duckvador} />
      </Switch>
    </Fragment>
  )
}

export default App
