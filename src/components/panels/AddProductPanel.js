import React from 'react'

import { ProductEditor } from 'components/products/ProductEditor'
import { PanelBody, PanelHeader, PanelStyles } from './styles'


const AddProductPanel = ({title, ...props}) => {
	return (
	  <PanelStyles>
		  <PanelHeader>
			  <h2>{title || " Add Display panel"}</h2>
		  </PanelHeader>
		  <PanelBody>
			<ProductEditor/>
		  </PanelBody>
	  </PanelStyles>
	)
  }
  
  export default AddProductPanel


//when errors arise
// function AllProductsPanel({title, ...props}) {
// 	return (
// 		<PanelStyles>
// 			<PanelHeader>
// 				<h2>{title || "Display panel"}</h2>
// 			</PanelHeader>
// 			<PanelBody>

// 			</PanelBody>
// 		</PanelStyles>
// 	)
// }

// export default AllProductsPanel