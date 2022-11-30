import React from 'react'

const Match = (props) => {
    if(props.match)
  return (
    <>
    It's a match! You and your partner both would be up for {props.match}!
    </>
  )
}

export default Match