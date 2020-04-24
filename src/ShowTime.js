import React from 'react'

const ShowTime = (props) => {
    const hour = props.hour
    const minutes = Math.round(hour / 60)
    const seconds = hour % 60
    const minutesStr = minutes < 10 ? '0' + minutes : minutes
    const secondsStr = seconds < 10 ? '0' + seconds : seconds
    return(
      <p>
        <h2>{ `${minutesStr}:${secondsStr}` }</h2>
        <h4>Tempo médio por volta</h4>
      </p>   
    )
}

export default ShowTime