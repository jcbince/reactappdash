import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { auth  } from 'libs/firebase';
import {onAuthStateChanged} from 'firebase/auth'

import { DashBoardPageStyles } from './styles';
import { AppBar } from '../../components/appbar'
import Sidebar from 'components/sidebar/Sidebar';




function DashBoardPage  (props){
		const [isUser, setIsUser] = useState(false)
		const navigate = useNavigate();

		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsUser(true)

			} else {
				setIsUser(false);
				//wrong 
				navigate('/');
			}

		})
		
		if (isUser) {
			return (

				<>
				<AppBar/>
				<DashBoardPageStyles>
					<Sidebar/>

				</DashBoardPageStyles>
	
				</>
			)
		} else {
			return null
		}

  
}

export default DashBoardPage
