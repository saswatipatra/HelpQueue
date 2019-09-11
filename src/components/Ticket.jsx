import React from 'react'
import PropTypes from 'prop-types'
import reallyAdorablePuppy from '../assets/images/cutestpuppy.jpg';


function Ticket(props){
  return (
    <div>
      <img src={reallyAdorablePuppy}/>
      <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  )
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket