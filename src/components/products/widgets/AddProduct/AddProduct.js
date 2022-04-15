
import React, { useState } from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('236.96')
  const [productImage, setProductImage] = useState('ProductPreview')
  const [productDescription, setProductDescription] = useState('DUMMY DESCROPTION TEXT')
  
  const formatter = useNumberFormat();

    function handleProductName(name){
      setProductName(name)
      
    }
    
    function handleProductPrice(price){
      setProductPrice(formatter(price))
    
    }

    function handleProductDescription(description){
      setProductDescription(description)
    
    }
    

  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            productDescription={productDescription}        
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            setProductImage={setProductImage}
            handleProductDescription={handleProductDescription} />
        </AddProductStyles>
  )
}

export default AddProduct