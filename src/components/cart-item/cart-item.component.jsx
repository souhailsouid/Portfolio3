import React from 'react'
import PropTypes from 'prop-types'
import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <article className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity}* {price} Euros</span>
    </div>

  </article>

)
CartItem.propTypes = {
  item: PropTypes.object
}
export default CartItem
