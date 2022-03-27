import React from 'react'
import { PanelBody, PanelHeader, PanelStyles } from './styles'



const AddProductPanel = ({title, ...props}) => {
  return (
	<PanelStyles>
		<PanelHeader>
			<h2>{title || " Add Display panel"}</h2>
		</PanelHeader>
		<PanelBody>

		</PanelBody>
	</PanelStyles>
  )
}

export default AddProductPanel



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