import React from 'react'
import PropTypes from 'prop-types'
import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <article className="collection-item">
    <img className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <footer className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </footer>
  </article>
)
CollectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
export default CollectionItem
