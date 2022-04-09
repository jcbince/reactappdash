import React from 'react';


import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import PlaceholderImage from 'assets/images/8k2.jpg'

function ProductPreview ({children, productName, productPrice, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={PlaceholderImage} alt='8ka2'/>
          </ProductImage>
          <ProductPrice>{productPrice}</ProductPrice>
          <ProductName>{productName}</ProductName>
          <ProductDescription>Whether it’s through intense workout routines, strength training or running, as long as he’s on the move, he’s happy. Stay tuned for more from Patrick on @umbro social channels or by searching #itsatrainingthing. Stand by for more stories dropping very soon.</ProductDescription>


        </ProductPreviewStyles>
  )
}

export default ProductPreview