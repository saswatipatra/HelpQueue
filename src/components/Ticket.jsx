import React from 'react'
import PropTypes from 'prop-types'
import reallyAdorablePuppy from '../assets/images/cutestpuppy.jpg'
import Moment from 'moment'



function Ticket(props){
  
  return (
    <div>
      <img src={reallyAdorablePuppy}/>
      <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style>
      <h4>{props.id}</h4>
      <h3>{props.location} - {props.names}</h3>
      <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  )
}
function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true)
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  key: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
}

export default Ticket