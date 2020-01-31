import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import PropTypes from 'prop-types'
import DropdownImageTrigger from '../dropdownImageTrigger/DropdownImageTrigger.component'
import './header.styles.scss'

const Header = ({ currentUser }) => {
  console.log(currentUser ? currentUser.displayName : null)
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <section className="options">
        <Link className="option" to="/shop">
        Shop
        </Link>
        <Link className="option" to="/contact">
        Contact
        </Link>
        {
          currentUser
            ? <DropdownImageTrigger
              photoURL={currentUser.photoURL}
            >
              {currentUser.displayName}
            </DropdownImageTrigger>
            : <Link className="option" to='/signin'>Se connecter</Link>
        }
      </section>
    </header>
  )
}
Header.propTypes = {
  currentUser: PropTypes.object

}
export default Header
