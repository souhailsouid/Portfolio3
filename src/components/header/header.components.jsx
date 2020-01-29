import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.styles.scss'
import { auth } from '../../../server/firebase.utils'
const Header = ({ currentUser }) => (
  <header className="header">
    <Link to="/">
      <img src={logo} className="logo" />
    </Link>
    <section className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </section>
  </header>
)
export default Header
