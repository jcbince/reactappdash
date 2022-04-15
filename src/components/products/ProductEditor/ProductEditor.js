import React from 'react';

import { ProductDataEntryForm } from '../ProductDataEntryForm';
import { ProductEditorStyles } from './styles';
import { ProductPreview } from '../ProductPreview';


function ProductEditor ({children, productName, productPrice, productImage, productDescription, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
 

  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm 
              handleProductName={handleProductName}
              handleProductPrice={handleProductPrice}
              handleProductDescription={handleProductDescription}
              setProductImage={setProductImage}/>
           <ProductPreview
            productName={productName}
            productPrice={productPrice}
            productDescription={productDescription} 
            productImage={productImage}
               />

        </ProductEditorStyles>
  )
}

export default ProductEditor