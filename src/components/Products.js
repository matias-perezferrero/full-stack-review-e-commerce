import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../redux/cartReducer'

function Products(props) {
  let category = props.match.params.category
  let items = props.products.filter(product => product.category === category)

  return (
    <div>
      <h1>{category}</h1>
      <div className='products-container'> 
      {items.map(item => {
        return (
          <div key={item.product_id} className="product">
            <p>name: {item.name}</p>
            <p>price: ${item.price}</p>
            <img src={item.image_1_url} alt={item.name} height={200}/>
            <button onClick={() => props.addToCart(item.product_id)}>Add to Cart</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default connect(null, {addToCart})(Products)