import Sidebar from 'components/sidebar/Sidebar'
import React, {useState} from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth  } from 'libs/firebase'

import { AppBar } from '../../components/appbar'
import { Link } from 'react-router-dom'


const PageNotFound = (props) => {
	const [isUser,setIsUser] = useState(false)

	onAuthStateChanged(auth, (user)=>{
		if(user){
			setIsUser(true)
		} else {
			setIsUser(false)
		}
	})
  return (
	<div>
		<AppBar/>
		<Sidebar/>
	  	<h1>404 - Lost</h1>
		  {
			  isUser? <Link to='/dashboard'>Back To Safety</Link> :  <Link to='/'>Back To Safety</Link>
		  }
	</div>
  )
}

export default PageNotFound
