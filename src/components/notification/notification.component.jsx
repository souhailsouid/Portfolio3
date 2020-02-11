import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'

const NotificationError = ({ error }) => {
  return (
    <Message
      error
      header='Oups, il y a quelques erreurs!'
      list={
        error
      }
    />
  )
}
NotificationError.propTypes = {
  error: PropTypes.object

}

export default NotificationError
