import React from 'react'
// import QuakesList from './QuakesList'
 
const Quakes = (props) => {
        const quakesList = props.quakes.map((singleQuake, index) => {
                return <p key={index}>
                    {singleQuake.properties.title} / {singleQuake.properties.time}
                </p>
            })    
        return(
            <div id="info">
               {quakesList}
            </div>

        )
    }

export default Quakes