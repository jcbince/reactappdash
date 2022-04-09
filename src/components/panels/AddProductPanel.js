import React from 'react'


import { PanelBody, PanelHeader, PanelStyles } from './styles'
import { AddProduct } from 'components/products/widgets/AddProduct'


const AddProductPanel = ({title, ...props}) => {
	return (
	  <PanelStyles>
		  <PanelHeader>
			  <h2>{title || " Add Display panel"}</h2>
		  </PanelHeader>
		  <PanelBody>
			<AddProduct/>
		  </PanelBody>
	  </PanelStyles>
	)
  }
  
  export default AddProductPanel

