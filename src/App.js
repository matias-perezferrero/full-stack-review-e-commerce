import React from "react";
import { connect } from "react-redux";
import { checkUser, clearReducer } from "./redux/userReducer";
import Header from "./components/Header";
import routes from "./routes";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.checkUser();
  }

  componentWillUnmount() {
    this.props.clearReducer()
  }

  render() {
    let loading = this.props.userReducer.loading ? "busy-cursor" : null;
    return (
      <div className={`App ${loading}`}>
        <Header />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, { checkUser, clearReducer })(App);
