import styled from 'styled-components';



const ProductDataEntryFormStyles  = styled.form`
      /* styles */
      width:380px;
      input:focus, textare:focus {
            border-color:corrrnflowerblue;
            background-color:#eff6ff;
            outline-color: cornflowerblue;
      }

      fieldset{
            display:flex;
            gap:1rem:
            margin-bottom:1rem;
      }
`;


const ProductImage  = styled.div`
      /* styles */
    
`;

const ProductName  = styled.div`
      /* styles */
      flex:3.5;
    
`;
const ProductPrice  = styled.div`
      /* styles */
      flex:3.5;
    
`;
const ProductDescription  = styled.div`
      /* styles */
      textarea{
            resize:none;
            font-size:14px;
      }
    
`;



export {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice}