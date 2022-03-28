import React from 'react'
import { PanelBody, PanelHeader, PanelStyles } from './styles'

const AllProductsPanel = ({title, ...props}) => {
	return (
	  <PanelStyles>
		  <PanelHeader>
			  <h2>{title || "Display panel"}</h2>
		  </PanelHeader>
		  <PanelBody>
  
		  </PanelBody>
	  </PanelStyles>
	)
  }
  
  export default AllProductsPanel



//when errors arise
// function AddProductPanel({title, ...props}) {
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