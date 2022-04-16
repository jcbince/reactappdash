import React, {useState} from 'react';
import { ref, push, set } from 'firebase/database'
import {db} from 'libs/firebase'



function useAddNewProduct(){
	const [loading , setLoading] = useState(false)

	const productLoader = async function(productData, imageFile){
		setLoading(true);
		const newRef= await push(ref(db,'products'))
		console.log(newRef.key)
	}
	return [loading, productLoader]
}

export {useAddNewProduct}