import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
  <article className="checkout-page">
    <header className="checkout-header">
      <div className="header-block">
        <span>Produits</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantité</span>
      </div>
      <div className="header-block">
        <span>Prix</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </header>

    {
      cartItems.map(cartItem =>
        cartItem.name
      )}
    <footer className="total">
      <span>Total: {total} euros </span>
    </footer>
  </article>
)

CheckoutPage.propTypes = {
  cartItems: PropTypes.func,
  total: PropTypes.func

}
const mapSateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapSateToProps)(CheckoutPage)
