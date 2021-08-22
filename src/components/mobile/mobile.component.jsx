import React from 'react'
import './mobile.styles.css'

function Mobile({data}) {
    return (
        <div>
            <h1>Text</h1>
            <p>{data!=''?data:"You need to type something!!!"}</p>
        </div>
    )
}

export default Mobile;