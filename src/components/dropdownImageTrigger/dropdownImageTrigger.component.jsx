import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { auth } from '../../../server/firebase.utils'
const DropdownImageTrigger = ({ photoURL, children }) => (
  <Dropdown
    trigger={
      <span>
        <Image avatar src={photoURL} />  {children}
      </span>}
    pointing='top left'
    icon={null}
  >
    <Dropdown.Menu>
      <Dropdown.Item text="Profile" as={Link} to='/accounts'/>
      <Dropdown.Item onClick={() => auth.signOut()}>Déconnexion</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

DropdownImageTrigger.propTypes = {
  photoURL: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

export default DropdownImageTrigger
