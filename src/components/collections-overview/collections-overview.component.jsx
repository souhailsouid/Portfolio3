import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionprops }) => (
      <CollectionPreview key={id} {...otherCollectionprops}/>
    ))}
  </div>
)
CollectionsOverview.propTypes = {
  collections: PropTypes.object.isRequired
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
