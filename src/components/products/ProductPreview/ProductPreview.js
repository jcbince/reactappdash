import React from 'react';
import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'


function ProductPreview ({children, productName, productPrice, productImage, productDescription,...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage} alt='8ka2' width="320" height="184"/>
          </ProductImage>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDescription}</ProductDescription>


        </ProductPreviewStyles>
  )
}

export default ProductPreview