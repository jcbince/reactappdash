
import React, { useState } from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import ProductPreviewImage from 'assets/images/8k2.jpg'

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('JS Kicks JC in the Teeth')
  const [productPrice, setProductPrice] = useState('666.333')
  const [productImage, setProductImage] = useState(ProductPreviewImage)
  const [productDescription, setProductDescription] = useState('Velocita is designed for players who need multi-directional agility and speed. From hard stops to split-second turns and directional changes. In simple terms – the faster you move, the more you are a blur to your opponent. The faster you move, the more time you have and the less time your opponents have to stop you. The faster you move, the quicker the ball is in the back of the net.')

  const [loading, productLoader] = useAddNewProduct();
  
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
    
    function handleSubmit(e) {
      e.preventDefault();
      const productData = {
        productName,
        productPrice,
        productDescription
      }
      setIsWriting(true);
      productLoader(productData, productImage)
    }

    if(isWriting){
      return <h1>Editor Feddback Component</h1>
    }else {
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
            handleProductDescription={handleProductDescription} 
            handleSubmit={handleSubmit} />
        </AddProductStyles>
  )
    }
  
}

export default AddProduct