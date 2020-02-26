import React, { Component } from "react";
import Products from "./Products";
import { Link, Route } from "react-router-dom";
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
    let categories = this.state.products.reduce((categories, product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
      return categories;
    }, []);

    return (
      <div >
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
        <Route path="/shop/:category" render={props => {
            return <Products {...props} products={this.state.products} getProducts={this.getProducts}/>
        }} />
      </div>
    );
  }
}

export default Shop