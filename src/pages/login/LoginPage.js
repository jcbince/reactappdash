import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'libs/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {LoginPageStyles, FormControl} from './styles'

import { Label } from './../../ui/forms'
import { Input } from './../../ui/forms'
import { SubmitButton } from '../../ui/buttons';

 

const LoginPage = (props) => {
	let navigation =  useNavigate();
	
	const[email, setEmail] =  useState('');
	const[password, setPassword] =  useState('');

	const notify = (error) => toast.error('Login Credentials not authorized', {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		});

	const [ setIsUser] = useState(false)
	const navigator = useNavigate();
	
	onAuthStateChanged(auth, (user)=>{
	   if(user){
		   setIsUser(true)
	   }else{
			  setIsUser(false)
			  navigator('/')
		   }
	})
	//what reroutes you back to dashboard
	function onHandleSubmit(e) {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
		.then(userCredential=>{
			console.log('Credentials Successful')
			navigation('dashboard');
		})
		.catch(error=>{
			notify(error);
		})
	
		
		

	}

 
	return (
		  <>	 
		  <LoginPageStyles>
					<ToastContainer/>
			

					<header>
						<h1>Welcome to the Login Screen</h1>
					</header>
					<form onSubmit={onHandleSubmit}>
						<FormControl >
							<Label>Email</Label>
							<Input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} required />	
						</FormControl>
						<FormControl>
							<Label>Password</Label>
							<Input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} required />
							
						</FormControl>
						<FormControl>

							<SubmitButton  color="white" type="submit">Sign into the Dashboard </SubmitButton>
						</FormControl>
					</form>
				</LoginPageStyles>
		 </>
		)
	 
  	
}

export default LoginPage

