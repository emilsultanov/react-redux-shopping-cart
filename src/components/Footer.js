import React from "react";
import {Container} from 'react-bootstrap'

function Footer(){
   return(
      <footer className="py-3" style={{backgroundColor:'#f5f5f5'}}>
         <Container >
            <span className="text-muted">Footer</span>
         </Container>
      </footer>
   )
}
export default Footer;