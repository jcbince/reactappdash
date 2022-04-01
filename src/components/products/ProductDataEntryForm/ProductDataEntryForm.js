import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import {Label, Input} from 'ui/forms'
import { ProductImageDropBox } from '../ProductImageDropBox';
import { TextArea } from 'ui/forms/textarea';


function ProductDataEntryForm ({children, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
            <ProductImage>
              <Label>Product Image</Label>
              <Input/>  
              <ProductImageDropBox/>
            </ProductImage>
            <fieldset>
              <ProductName>
                <Label>Product Name</Label>
              </ProductName>

              <ProductPrice>
              <Label>Product Price</Label>
              <Input/>  
              </ProductPrice>

            </fieldset>

            <ProductDescription>
            <Label>Product Description</Label>  
            <TextArea rows={6}/>
            </ProductDescription>  
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm