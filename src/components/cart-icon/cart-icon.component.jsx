import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import ShoppingIcon from '../../assets/ShoppingIcon.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func
}
export default connect(null, mapDispatchToProps)(CartIcon)
