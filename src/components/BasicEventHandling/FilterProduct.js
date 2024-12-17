import React, { useState } from 'react'

const FilterProduct = () => {
    const [products, setProducts] = useState([
        "laptop", "camera", "mobile", "Pencil", "bottle", "ball"
    ])

    const [searchText, setSearchText] = useState('')

    const filteredProducts = products.filter((product) => product.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
        <input type='text' placeholder='search....' value={searchText} onChange={(e) => setSearchText(e.target.value)} />

        <ul>
            {
                filteredProducts.map((product) => <li>{product}</li>)
            }
        </ul>
    </div>
  )
}

export default FilterProduct