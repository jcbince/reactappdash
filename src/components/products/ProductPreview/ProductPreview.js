import React from 'react';


import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import PlaceholderImage from 'assets/images/8k2.jpg'

function ProductPreview ({children, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductName>Name</ProductName>
          <ProductImage>
            <img src={PlaceholderImage} alt='8ka2'/>
          </ProductImage>
          <ProductPrice>Price</ProductPrice>
          <ProductDescription>Description</ProductDescription>


        </ProductPreviewStyles>
  )
}

export default ProductPreview