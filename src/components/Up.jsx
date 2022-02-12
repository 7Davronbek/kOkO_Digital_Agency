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

  return (
    <a href='#'  className={`UP ${up ? 'active' : ''}`}>
        <i className="icon icon-up"></i>
    </a>
  )
}

export default Up