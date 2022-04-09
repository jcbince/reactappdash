
import React, { useState } from 'react';

import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('236.96')

    function handleProductName(name){
      setProductName(name)
      
    }
    
    function handleProductPrice(price){
      setProductPrice(price)
    
    }
    

  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
            productName={productName}
            productPrice={productPrice}  
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}/>
        </AddProductStyles>
  )
}

export default AddProduct