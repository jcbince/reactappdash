import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'libs/firebase';

import { AppBar } from '../../components/appbar';

import { Label } from './../../ui/forms'
import { Input } from './../../ui/forms'
import { SubmitButton } from '../../ui/buttons';


import {LoginPageStyles, FormControl} from './styles'







const LoginPage = (props) => {
	let navigation =  useNavigate();
	console.log('auth')
	
	const[email, setEmail] =  useState('');
	const[password, setPassword] =  useState('');
	//what reroutes you back to dashboard
	function onHandleSubmit(e) {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
	
		
		navigation('dashboard');

	}
  return (
	<>
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
	<LoginPageStyles>
			<div class="login-styles">

			</div>

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
					<Input type="password" placeholder="email" onChange={(e)=> setPassword(e.target.value)} required />
					
				</FormControl>
				<FormControl>

					<SubmitButton  color="pink" type="submit">Sign into the Dashboard </SubmitButton>
				</FormControl>
			</form>
		</LoginPageStyles>	
	</>
  )
}

export default LoginPage
