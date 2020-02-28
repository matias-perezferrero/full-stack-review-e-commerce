import React, { Component } from "react";
import Products from "./Products";
import shopHome from './shopHome'
import {connect} from 'react-redux'
import { Link, Route, Redirect } from "react-router-dom";
import axios from "axios";


class Shop extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
        axios.get('/api/products').then(res => {
            this.setState({
                products: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

  render() {
    if(!this.props.userReducer.user.user_email) return <Redirect to="/" />
    
    let categories = this.state.products.reduce((categories, product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
      return categories;
    }, []);

    return (
      <div className="shop">
        <h1 style={{padding: "20px", width: "100%", textAlign: 'center'}}>Shop by Category</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          {categories.map(category => {
            return (
              <Link key={category} to={`/shop/${category}`}>
                {category}
              </Link>
            );
          })}
        </div>
        <Route exact path="/shop" component={shopHome} />
        <Route path="/shop/:category" render={props => {
            return <Products {...props} products={this.state.products} getProducts={this.getProducts}/>
        }} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  }
}

export default connect(mapStateToProps)(Shop)