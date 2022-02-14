import React, { useState } from 'react'

const Up = () => {
    const [up, setUp] = useState(false);

    const changeup = () => {
        if (window.scrollY >= 300) {
            setUp(true);
        } else {
            setUp(false)
        }
    }

    window.addEventListener('scroll', changeup);

    const top = () => {
        window.scrollTo(0,0);
    }
    
  return (
    <a onClick={top} className={`UP ${up ? 'active' : ''}`}>
        <i className="icon icon-up"></i>
    </a>
  )
}

export default Up