import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetch_products } from "../store/actions/shoppingCartActions";
import Product from '../components/Product';
import { Container, Row } from 'react-bootstrap';


function Products(props) {
   const dispatch = useDispatch();
   const products = useSelector( ( state ) => state.products );
   const onFetchProducts = useCallback( () => {
      dispatch( fetch_products() );
   }, [ dispatch ] );

   useEffect( () => {
      onFetchProducts();
   }, [ onFetchProducts ] );

   return (
      <section className={'section product__section py-5'}>
         <Container>
            <Row>
               { products &&
               products.map( ( product ) => {
                  return (
                     <Product
                        key={ product.product_id }
                        { ...product }
                     />
                  );
               } ) }
            </Row>
         </Container>
      </section>
   )
}
export default React.memo(Products);



