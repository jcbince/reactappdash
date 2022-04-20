
import React, { useState } from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import ProductPreviewImage from 'assets/images/8k2.jpg'
import { EditorFeedback } from 'components/products/EditorFeedback';

const defaults = {
  description:`Velocita is designed for players who need multi-directional agility and speed. From hard stops to split-second turns and directional changes. In simple terms  the faster you move, the more you are a blur to your opponent. The faster you move, the more time you have and the less time your opponents have to stop you. The faster you move, the quicker the ball is in the back of the net.`,
  name:"Best Shoes Ever",
  price: 666.333 ,
  image: {previewImage:ProductPreviewImage , file:null}

}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productImage, setProductImage] = useState(defaults.image)
  const [productDescription, setProductDescription] = useState(defaults.description)
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
      productLoader(productData, productImage.file)
      setProductDescription(defaults.description)
      setProductImage(defaults.image)
      setProductName(defaults.name)
      setProductPrice(defaults.price)
    }

    if(isWriting){
      return <EditorFeedback status={loading} writeCompleted={setIsWriting}/>
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