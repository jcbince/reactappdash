
import React, { useState } from 'react';

import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
    function handleProductName(name){
      setProductName(name);

    }
  
  return (
        <AddProductStyles  {...props}>
          <ProductEditor productName={productName} handleProductName={handleProductName}/>
        </AddProductStyles>
  )
}

export default AddProduct