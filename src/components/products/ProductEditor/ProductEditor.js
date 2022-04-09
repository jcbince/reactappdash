import React from 'react';

import { ProductDataEntryForm } from '../ProductDataEntryForm';
import { ProductEditorStyles } from './styles';
import { ProductPreview } from '../ProductPreview';


function ProductEditor ({children, productName, handleProductName, ...props})  {
 

  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm handleProductName={handleProductName}/>
           <ProductPreview productName={productName}/>

        </ProductEditorStyles>
  )
}

export default ProductEditor