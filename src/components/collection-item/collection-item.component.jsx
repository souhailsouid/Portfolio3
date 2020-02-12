import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.action'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <article className="collection-item">
      <img className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <footer className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
      <CustomButton onClick={() => addItem(item)} inverted>Ajouter au panier</CustomButton>
    </article>
  )
}
CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)
