import React from 'react'

import { Link } from 'react-router-dom'

import { AppBar } from '../../components/appbar'


const DashBoardPage = (props) => {
  return (
	<div>
		<AppBar/>
		<nav>
			<ul>
				<li><Link to="./dashboard">Dashboard</Link></li>
				<li><Link to="./">Login</Link></li>
				<li><Link to="./add">Add Products</Link></li>
				<li><Link to="./update">Update Products</Link></li>
				<li><Link to="./delete">Delete Products</Link></li>

			</ul>
		</nav>
	  	
	</div>
  )
}

export default DashBoardPage
