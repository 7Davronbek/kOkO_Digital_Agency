import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Services from './components/Services'

const App = () => {
    return (
        <>
        <Header />
        <Services />
        <div className="vh-100"></div>
            {/* About us 
            Projects
            Portfolio
            Contacs */}
        </>
    )
}

export default App
