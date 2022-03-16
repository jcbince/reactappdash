import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar } from '../../components/appbar'


const PageNotFound = (props) => {
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
	  <h1>404</h1>
	</div>
  )
}

export default PageNotFound
