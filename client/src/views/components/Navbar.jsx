import React from 'react'
import filmsLogo from '../../assets/films.svg'

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 border-b border-gray-500 bg-amber-50/70">
            <div className="text-3xl text-gray-700 px-4 py-2 md:px-6 lg:px-8">
                <img src={filmsLogo} alt="Films Logo" className="h-8" />
            </div>
        </nav>
    )
}

export default Navbar
