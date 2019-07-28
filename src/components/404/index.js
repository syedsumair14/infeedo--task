import React from 'react'
import '../../assets/styles/error.css'
import {Link as Navlink} from 'react-router-dom'

export const noMatch = () => {
    return(
        <div className="container">
            <div className="row" id="fourZeroFour">
                <div className="col-sm-12">
                <p id='makeBig'>NO SUCH PAGE :P</p>
                <p className="text-center">Instead go to <Navlink to='/feed'>FEED</Navlink> page</p>
                </div>
            </div>
        </div>
    )
}