import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'

class Landing extends Component {

    render() {
        if (this.props.userReducer.user.user_email) return <Redirect to="/shop" />
        return (
            <div className="landing" style={{background: 'blanchedalmond'}}>
                <h2 style={{color: "rebeccapurple"}}>Sign in to start wasting your money right away!</h2>
                <div id="advertisement-container">
                <div className="advertisement" id="one" ></div>
                <div className="advertisement" id="two" ></div>
                <div className="advertisement" id="three"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userReducer: reduxState.userReducer
    }
}

export default connect(mapStateToProps)(Landing)