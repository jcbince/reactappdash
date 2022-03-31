import React from 'react';

import { ProductDataEntryForm } from '../ProductDataEntryForm';
import { ProductEditorStyles } from './styles';
import { ProductPreview } from '../ProductPreview';


function ProductEditor ({children, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm/>
           <ProductPreview/>

        </ProductEditorStyles>
  )
}

export default ProductEditor