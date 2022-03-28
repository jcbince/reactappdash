import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import {Label, Input} from 'ui/forms'


function ProductDataEntryForm ({children, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
            <ProductImage>
              <Label>Product Image</Label>
              <Input/>
            </ProductImage>

            <ProductName>
              <Label>Product Name</Label>
            </ProductName>

            <ProductPrice>
            <Label>Product Price</Label>  
            </ProductPrice>

            <ProductDescription>
            <Label>Product Description</Label>  

            </ProductDescription>  
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm