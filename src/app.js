/* eslint-disable no-undef */

import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.components'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from '../server/firebase.utils'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount () {
    unsubscribeFromAuth = null
    this.unsubscribeFromAuth()
  }

  render () {
    const { currentUser } = this.state
    return (
      <Fragment>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </Fragment>
    )
  }
}
export default App
