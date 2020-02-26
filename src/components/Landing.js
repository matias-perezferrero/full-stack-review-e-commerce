import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'

class Landing extends Component {

    render() {
        if (this.props.userReducer.user.user_email) return <Redirect to="/shop" />
        return (
            <div className="landing">
                <h2>Sign in to waste your money today!</h2>
                <div id="advertisement-container">
                <div className="advertisement" style={{background: "blanchedalmond"}}>Such Advertisement</div>
                <div className="advertisement" style={{background: "indianred"}}>Such Advertisement</div>
                <div className="advertisement" style={{background: "rebeccapurple"}}>Such Advertisement</div>
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