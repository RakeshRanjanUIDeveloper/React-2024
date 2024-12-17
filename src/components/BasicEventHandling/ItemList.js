import React from 'react'
import products from '../JSX/ProductData.js'
const ItemList = () => {
    const handleClick = (productName) =>{
        console.log(productName)
    }
    const handleSearch = () =>{

    }
    
  return (
    <div>
       s
        <ul>
            {
                products.map((product) => <li key={product.id} onClick={() => handleClick(product.name)}>{product.name}</li>)
            }
        </ul>
    </div>
  )
}

export default ItemList