import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact path={`${match.path}`}
        component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}
ShopPage.propTypes = {
  match: PropTypes.object
}
export default ShopPage
