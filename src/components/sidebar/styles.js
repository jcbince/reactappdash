
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
 align-items: center ;
 gap:0.25rem;
  h2{
  font-size:18px;
 
  }
  svg{
     color:grey;
     vertical-align:middle;
  
   }
`;

export {SideBarStyles, SideBarHeader, SideBarListStyles}