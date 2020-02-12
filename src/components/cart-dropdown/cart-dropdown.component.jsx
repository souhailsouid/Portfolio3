import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ history }) =>

  (
    <div className='cart-dropdown'>
      <div className='cart-items'>

      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
        }}
      >
      GO TO CHECKOUT
      </CustomButton>
    </div>
  )
CartDropdown.propTypes = {
  history: PropTypes.object
}
export default withRouter(CartDropdown)
