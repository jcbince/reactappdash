import Sidebar from 'components/sidebar/Sidebar'
import React from 'react'

import { AppBar } from '../../components/appbar'


const PageNotFound = (props) => {
  return (
	<div>
		<AppBar/>
		<Sidebar/>
	  	<h1>404 - Lost</h1>
	</div>
  )
}

export default PageNotFound
