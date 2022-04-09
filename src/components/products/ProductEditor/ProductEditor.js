import React from 'react';

import { ProductDataEntryForm } from '../ProductDataEntryForm';
import { ProductEditorStyles } from './styles';
import { ProductPreview } from '../ProductPreview';


function ProductEditor ({children, productName, productPrice, handleProductName, handleProductPrice, ...props})  {
 

  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm 
              handleProductName={handleProductName}
              handleProductPrice={handleProductPrice}/>
           <ProductPreview
            productName={productName}
            productPrice={productPrice}
               />

        </ProductEditorStyles>
  )
}

export default ProductEditor