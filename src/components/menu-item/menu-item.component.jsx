import React from 'react'
import PropTypes from 'prop-types'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <section className={`${size} menu-item`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
    <article className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </article>
  </section>
)

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}
export default MenuItem
