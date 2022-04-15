import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import {Label, Input} from 'ui/forms'
import { ProductImageDropBox } from '../ProductImageDropBox';
import { TextArea } from 'ui/forms/textarea';


function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
            <ProductImage>
              <Label>Product Upload Image</Label>
              <ProductImageDropBox setProductImage={setProductImage}/>
            </ProductImage>
            <fieldset>
              <ProductName>
                <Label>Product Name</Label>
                <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30} />
              </ProductName>

              <ProductPrice>
                <Label>Product Price</Label>
                <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>  
              </ProductPrice>
            </fieldset>

            <fieldset>
              <ProductDescription>
                <Label>Product Description</Label>  
                <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} rows={6}/>
              </ProductDescription>
            
            </fieldset>
              

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm