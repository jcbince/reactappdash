import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase'


import { SideBarStyles} from './styles'

import { Button } from 'ui/buttons'



const SideBar = (props) => {

	function onLogoutRequest(e) {
		signOut(auth)
	}
  	return (
		<SideBarStyles>
			<header>
				<h1>SideBar</h1>
				<nav>
				
				<ul>
					<li><Link to="./dashboard">Dashboard</Link></li>
					<li><Link to="./">Login</Link></li>
					<li><Link to="./add">Add Products</Link></li>
					<li><Link to="./update">Update Products</Link></li>
					<li><Link to="./delete">Delete Products</Link></li>

				</ul>
			</nav>
			</header>

			
			<Button onClick={onLogoutRequest}>Logout</Button>
			
		</SideBarStyles>
  )
}

export default SideBar