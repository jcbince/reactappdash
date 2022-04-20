import {useState} from 'react';
import { ref, push, set } from 'firebase/database'

import {ref as storageRef,uploadBytes, getDownloadURL } from 'firebase/storage'
import {db} from 'libs/firebase'//storage wont work for some reason like in the video


function useAddNewProduct(){
	const [loading , setLoading] = useState(false)

	const productLoader = async function(productData, imageFile){
		setLoading(true);
		const newRef= await push(ref(db,'products'))
		console.log(newRef.key)
		

		const imageRef = await storageRef(`images/products/${imageFile.name}`)
		const uploadRef = await  uploadBytes(imageRef, imageFile)
		const imageUrl = await getDownloadURL(imageRef)
		set(newRef,{...productData})

		let results = Promise.all([newRef ,imageRef, uploadRef, imageUrl])

		results.then(()=>{
			set(newRef, {
				...productData, 
				imageUrl,
				imageStoragePath:uploadRef.metadata.fullPath,
				uid:newRef.key })
		})
		.then(()=>{
			setLoading(false)
		})
	}
	return [loading, productLoader]
}

export {useAddNewProduct}