import React from 'react'
import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {
    const HeaderStyles={
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h4>{text}</h4>
      </div>
    </header>
  )
}

Header.defaultProps={
    text:'Feedback Ui',
    bgColor:'rgba(0,0,0,.5)',
    textColor:'#ff6a95'
}
Header.propTypes={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}

export default Header
