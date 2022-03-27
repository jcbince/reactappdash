import React from 'react'

import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase'


import { SideBarStyles} from './styles'

import {MdDashboard} from "react-icons/md";
import { Button } from 'ui/buttons'
import ProductOptions from './ProductOptions'



const SideBar = (props) => {

	function onLogoutRequest(e) {
		signOut(auth)
	}
  	return (
		<SideBarStyles>
			<header>
				<MdDashboard size="1.75rem"/>
				<h1>SideBar</h1>
				<nav>
				<ProductOptions/>
				
				</nav>
			</header>

			
			<Button onClick={onLogoutRequest}>Logout</Button>
			
		</SideBarStyles>
  )
}

export default SideBar
