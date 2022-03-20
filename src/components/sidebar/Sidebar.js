import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase'

import { SidebarStyles } from './styles'

import { Button } from 'ui/buttons'



const Sidebar = (props) => {

	function onLogoutRequest(e) {
		signOut(auth)
	}
  	return (
		<SidebarStyles>
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

			<div className="content">
				<Button onClick={onLogoutRequest}>Logout</Button>
			</div>
		</SidebarStyles>
  )
}

export default Sidebar
