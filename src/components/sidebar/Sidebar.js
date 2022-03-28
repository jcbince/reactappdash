import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'libs/firebase'


import { SideBarStyles} from './styles'

import { Button } from 'ui/buttons'
import ProductOptions from './ProductOptions'



const SideBar = (props) => {

	function onLogoutRequest(e) {
		setIsUser(false)
		navigator('/')
		
	}

	const [isUser, setIsUser] = useState(false)
	const navigator = useNavigate();

	   onAuthStateChanged(auth, (user)=>{
		   if(user){
			   setIsUser(true)
		   }else{
			  setIsUser(false)
			  navigator('/')
		   }
	   })

	
	  if(isUser){
		return (
			<SideBarStyles>
				<header>
					<h1>SideBar</h1>
					<nav>
					<ProductOptions/>
					
					</nav>
				</header>
	
				
				<Button onClick={onLogoutRequest}>Logout</Button>
				
			</SideBarStyles>
	  )
	  }else{
		  return null
	  }
  	
}

export default SideBar
