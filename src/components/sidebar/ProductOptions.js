import React from 'react'

import { Link } from 'react-router-dom'

import styled from 'styled-components';

const ProductOptionStyles = styled.ul`

	list-style:none;
	margin:3rem;
	padding:1rem;
	li{
		padding:1rem;
	}
	a{
		font-size:14px;
		text-decoration:none;
		
	}



` 


function ProductOptions() {
  return (
		<ProductOptionStyles>
			<li><Link to="/dashboard">View All Products</Link></li>
			<li><Link to="add">Add Products</Link></li>
			<li><Link to="update">Update Products</Link></li>
			<li><Link to="delete">Delete Products</Link></li>
		</ProductOptionStyles>
  )
}

export default ProductOptions

