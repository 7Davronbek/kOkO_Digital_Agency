import React from 'react'
import Header from './components/Header'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

const App = () => {
    return (
        <>
        <Header />
        <Services />
        <Portfolio />
        <div className="vh-100"></div>
            {/* About us 
            Projects
            Portfolio
            Contacs */}
        </>
    )
}

export default App
