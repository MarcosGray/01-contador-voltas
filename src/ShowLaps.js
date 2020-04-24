import React from 'react'

const ShowLaps = (props) => {
    return(
        <p>
            <h1>{ props.laps }</h1>
            <h3>
                { props.laps > 1 ? 'Voltas' : 'Volta' } 
            </h3>
        </p>
    )
}

export default ShowLaps

