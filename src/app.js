import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.components'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
function App () {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </Fragment>
  )
}

export default App
