import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { AppBar } from '../../components/appbar';

import styled from 'styled-components';

import { Label } from './../../ui/forms'
import { Input } from './../../ui/forms'
import { Button, SubmitButton } from '../../ui/buttons';


const LoginPageStyles = styled.section ` 

	max-width: 400px;
	margin: 2rem auto;

	h1 {
		font-size: 2rem;
	}

	login-styles {

	}



`
const FormControl = styled.div`
		margin-bottom:1rem;
		justify-content: center;

`


const LoginPage = (props) => {
	let navigation =  useNavigate();

	//what reroutes you back to dashboard
	function onHandleSubmit(e) {
		e.preventDefault();
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
					<Input type="email" placeholder="email" required />	
				</FormControl>
				<FormControl>
					<Label>Password</Label>
					<Input type="email" placeholder="email" required />
					
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
