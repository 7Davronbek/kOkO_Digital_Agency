import React from 'react'
import { connect } from 'react-redux'
import { updateState } from '../redux/actions/emailAction'

const Theme = (props) => {
    return (
        <>

            <div className="fixedTheme">
                <h6
                    className={` ${props.white ? '' : 'active'}`}
                    onClick={() => localStorage.setItem('theme', 'black')}
                    // onClick={() => props.updateState({white: false})}
                    >
                    Dark</h6>
                <h6 
                    className={`${props.white ? 'actives' : ''}`}
                    onClick={() => localStorage.setItem('theme', 'white')}
                    // onClick={() => props.updateState({white: true})}
                >Light</h6>
            </div>

        </>
    )
}

const mapStateToProps = state => {
    return {
        white: state.email.white
    }
}

export default connect(mapStateToProps, {updateState})(Theme)        