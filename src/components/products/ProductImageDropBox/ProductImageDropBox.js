import React from 'react';

import {ProductImageDropBoxStyles} from './styles'

function ProductImageDropBox ({children, ...props})  {
  return (
        <ProductImageDropBoxStyles  {...props}>
           <h2>ProductImageDropBox Component</h2>
           {children}

        </ProductImageDropBoxStyles>
  )
}

export default ProductImageDropBox