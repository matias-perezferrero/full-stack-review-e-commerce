
import React from 'react'

export default function Products(props) {
  let category = props.match.params.category
  let items = props.products.filter(product => product.category === category)
  return (
    <div>
      <h1>{category}</h1>
      <div className='products-container'> 
      {items.map(item => {
        return (
          <div key={item.id} className="product">
            <p>name: {item.name}</p>
            <p>price: {item.price}</p>
            <img src={item.image_1_url} alt={item.name} height={200}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}