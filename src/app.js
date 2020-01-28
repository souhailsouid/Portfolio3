import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
// import CollectionPreview from './components/preview-collection/collection-preview.component'

function App () {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/test" component={CollectionPreview} /> */}
      </Switch>
    </Fragment>
  )
}

export default App
