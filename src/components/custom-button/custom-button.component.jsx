import React from 'react'
import PropTypes from 'prop-types'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, isGithubSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''}${isGithubSignIn ? 'github-sign-in' : ''} custom-button`}
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
  isGithubSignIn: PropTypes.bool
}
export default CustomButton
