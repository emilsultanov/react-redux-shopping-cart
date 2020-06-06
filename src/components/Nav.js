import React from "react";
import Logo from '../logo.svg';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import {Container,Badge} from 'react-bootstrap'


const Navbar = styled.nav`
  min-height: 50px;
  height: 50px;
  background-color: #7952b3;
  
  
  & a.logo__link{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavItems = styled.ul`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 10px 12px;
  &>a{
    color: #fff;
    text-decoration: none;
  }
`;

const LogoBrand = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

function Nav(props) {
   const cartProducts = useSelector( ( state ) => state.cartProducts );
   return (
      <Navbar>
         <Container className={'d-flex flex-column flex-md-row justify-content-between h-100'}>
            <Link className={'logo__link'} to='/'>
               <LogoBrand src={ Logo }  alt=""/>
            </Link>
            <NavItems>
               <NavItem>
                  <NavLink to='/'>
                     Home
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to='/products'>
                     Products
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to='/cart'>
                     Cart
                     {
                        cartProducts.length>0? <Badge className={'ml-2'} variant="light">{cartProducts.length}</Badge>:null
                     }
                  </NavLink>
               </NavItem>
            </NavItems>
         </Container>
      </Navbar>
   )
}
export default React.memo(Nav);