import React from 'react'
const ProductList = ({products}) => {
  return (
    <div>
    {
        products.map((p) => <p>{p.name}- {p.price} - {p.category}</p>)
    }
    
    </div>
  )
}

export default ProductList