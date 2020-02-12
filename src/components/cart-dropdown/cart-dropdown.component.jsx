import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history }) => (

  <section className='cart-dropdown'>
    <div className='cart-items' >
      { cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
      }}
    >
      ALLER AU PANIER
    </CustomButton>
  </section>
)

CartDropdown.propTypes = {
  history: PropTypes.object,
  cartItems: PropTypes.object
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})
export default withRouter(connect(mapStateToProps, null)(CartDropdown))
