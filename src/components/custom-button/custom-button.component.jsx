import React from 'react'
import PropTypes from 'prop-types'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, isGithubSignIn, inverted, ...otherProps }) => (
  <button className={ ` 
    ${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''}
    ${isGithubSignIn ? 'github-sign-in' : ''} 
    custom-button
    ` }
  {...otherProps}
  >
    {children}
  </button>
)

CustomButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  isGoogleSignIn: PropTypes.bool,
  isGithubSignIn: PropTypes.bool,
  inverted: PropTypes.bool
}
export default CustomButton
