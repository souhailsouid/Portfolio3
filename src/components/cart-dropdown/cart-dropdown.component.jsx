import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history }) => (

  <section className='cart-dropdown'>
    <div className='cart-items' >
      {cartItems.length
        ? (cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem}/>))
        : (
          <span className="empty-message">
            Votre panier est vide
          </span>
        )

      }
    </div>
    {cartItems.length
      ? <CustomButton
        onClick={() => {
          history.push('/checkout')
        }}
      >
      ALLER AU PANIER
      </CustomButton>
      : null}
  </section>
)

CartDropdown.propTypes = {
  history: PropTypes.object,
  cartItems: PropTypes.object
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps, null)(CartDropdown))
