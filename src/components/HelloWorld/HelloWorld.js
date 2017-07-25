import React from 'react'
import PropTypes from 'prop-types'

/** A super lame component that displays a message. */
function HelloWorld({message}) {
  return <div>Hello {message}</div>
}


HelloWorld.propTypes = {
  /** Message to Display */
  message: PropTypes.string
}

HelloWorld.defaultProps = {
  /** Message to Display */
  message: 'World'
}

export default HelloWorld
