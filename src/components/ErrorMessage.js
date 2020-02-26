import React from "react";
import {connect} from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ErrorMessage extends React.Component {
  render() {
    if (this.props.userReducer.error)
      toast.error(`${this.props.userReducer.errorMessage}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      
    return (
      <div>
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps)(ErrorMessage);
