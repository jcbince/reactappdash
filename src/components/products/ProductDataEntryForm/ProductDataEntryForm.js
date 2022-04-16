import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import {Label, Input} from 'ui/forms'
import { ProductImageDropBox } from '../ProductImageDropBox';
import { TextArea } from 'ui/forms/textarea';
import { SubmitButton } from 'ui/buttons';


function ProductDataEntryForm ({children, handleSubmit, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
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
            <div>
              <SubmitButton width="100%" padding="0.75rem 0" margin="1.125rem 0 0 0" type="submit">Add Product</SubmitButton>
            </div>
              

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm