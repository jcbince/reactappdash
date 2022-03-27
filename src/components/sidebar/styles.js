
import styled from 'styled-components';

const SideBarStyles = styled.aside`
   position:relative;
   width:289px;
   box-shadow: 2px 0 2px -2px grey;
   padding:3rem;
   background-color:#ffffff;
   
`;

const SideBarListStyles = styled.a `
  
  text-decoration: none;

`

const SideBarHeader = styled.header`
 color:grey;
 display:flex;
 text-align:center;
  h2{
  font-size:18px;
 
  }

  svg{
     color:grey;
     vertical-align:middle;
  
   }
`;

export {SideBarStyles, SideBarHeader, SideBarListStyles}