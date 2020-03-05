import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import logo from '../../assets/logo.png'
import PropTypes from 'prop-types'
import DropdownImageTrigger from '../dropdownImageTrigger/dropdownImageTrigger.component.jsx'
import zenika from '../../assets/znk.png'
import CartIcon from '../cart-icon/cart-icon.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import './header.styles.scss'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser ? currentUser.displayName : null)
  return (
    <header className="header-menu">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>

      { currentUser
        ? <section className="options">
          <Link className="option" to="/shop"> Shop </Link>
          <Link className="option" to="/contact"> Contact </Link>
          <DropdownImageTrigger
            photoURL={
              currentUser.photoURL
                ? currentUser.photoURL
                : zenika
            } >
            {currentUser.displayName }
          </DropdownImageTrigger>
          <CartIcon/>
          {hidden ? null : <CartDropdown/>}
        </section>
        : null}

    </header>
  )
}
Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool

}
const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
