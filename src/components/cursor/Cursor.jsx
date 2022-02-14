import React, { useEffect, useRef } from 'react'

const Cursor = () => {
    const mainCursor = useRef(null)
    const secondaryCursor = useRef(null)

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1
    })

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;

            const mouseX = clientX
            const mouseY = clientY

            positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2
            positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2

            mainCursor.current.style.transform = `translate3d(${(mouseX - mainCursor.current.clientWidth / 2)}px, ${mouseY - mainCursor.clientHeight / 2}px, 0)`
        })

    }, [])

    useEffect(() => {
        const followMouse = () => {

            positionRef.current.key = requestAnimationFrame(followMouse)

            const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current

            if(!destinationX | !destinationY) {
                positionRef.current.destinationX = mouseX
                positionRef.current.destinationY = mouseY
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.3 
                positionRef.current.distanceY = (mouseY - destinationY) * 0.3

                if(Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.3) {
                    positionRef.current.destinationX = mouseX
                    positionRef.current.destinationY = mouseY
                } else {
                    positionRef.current.destinationX += distanceX 
                    positionRef.current.destinationY += distanceY
                }
            }

            secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`

        }

        followMouse()
    }, [])

    return (
        <div className="myCursor">
            <div className='main' ref={mainCursor}>
                <div className="secondary" ref={secondaryCursor} ></div>
            </div>
        </div>
    )
}

export default Cursor