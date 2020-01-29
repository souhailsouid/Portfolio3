import React from 'react'
import PropTypes from 'prop-types'
import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

CustomButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}
export default CustomButton
