import styled from 'styled-components';


const AppBarStyles = styled.nav`
	display:flex;
	justify-content:space-between;
	box-shadow: 0 0 2px 1px grey;
	padding: 0.5rem 1rem;
	height: 64px;
	width:100%

`

const AppBarItems = styled.ul`
	display:flex;
	align-items:center;
	
`

const AppBarItem = styled.ul`
	
	padding-left:1rem;

`

export  {AppBarStyles,AppBarItem,AppBarItems}