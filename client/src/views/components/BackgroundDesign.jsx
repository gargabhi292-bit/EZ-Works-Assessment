import React from 'react'

const BackgroundDesign = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <img src={'/bg.png'} className="absolute top-0 left-0 w-screen h-screen" />
            <img src={'/ring1.png'} className="absolute top-0 right-0 w-75 h-75 sm:w-100 sm:h-100" />
            <img src={'/ring2.png'} className="absolute bottom-0 left-0 w-75 h-75 sm:w-100 sm:h-100" />
        </div>
    )
}


export default BackgroundDesign