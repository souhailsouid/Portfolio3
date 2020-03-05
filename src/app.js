/* eslint-disable no-undef */

import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.components'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import { auth, createUserProfileDocument } from '../server/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount () {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
        } else {
          setCurrentUser(userAuth)
        }
      })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" render={() =>
            this.props.currentUser
              ? (<HomePage />)
              : <Redirect to="/signin" />} />
          <Route path="/shop" component={ShopPage} />

          {/* <Route path="/shop" render={() =>
            this.props.currentUser
              ? (<ShopPage />)
              : <Redirect to="/signin" />}
          /> */}
          <Route exact path="/signin" render={
            () => this.props.currentUser
              ? (<Redirect to="/" />)
              : <SignInAndSignUp/>}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </Fragment>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
App.propTypes = {
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.object

}
export default connect(mapStateToProps, mapDispatchToProps)(App)
