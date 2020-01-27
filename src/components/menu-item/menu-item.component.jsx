import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <section className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
      <article className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </article>
    </section>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  size: PropTypes.string,
  history: PropTypes.object
}

export default withRouter(MenuItem)
