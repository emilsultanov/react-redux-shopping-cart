import React from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { select_product } from "../store/actions/shoppingCartActions";
import { Col, Button, Badge } from "react-bootstrap";


const MyCard = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 10px;
  flex-direction: column;
  -webkit-box-shadow: 0px 2px 10px 0px rgba(204,204,204,1);
  -moz-box-shadow: 0px 2px 10px 0px rgba(204,204,204,1);
  box-shadow: 0px 2px 10px 0px rgba(204,204,204,1);
`;


const CardImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;


const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;


const CardTitle = styled.span`
  padding: 15px 0;
  font-size: 14px;
`;


const CardDesc = styled.p`

`;


function Product( { product_name, product_price, product_discount_price, product_id } ) {
   const dispatch = useDispatch();
   const cartProducts = useSelector( ( state ) => state.cartProducts );
   const cartProductsId = cartProducts.map( ( item ) => item.product_id );
   const test = cartProductsId.includes( product_id );

   const onSelectProduct = ( id, event ) => {
      let isSelected = event.target.dataset.selected === "false";
      dispatch( select_product( id, isSelected ) );
   };

   return (
      <Col lg={ 3 } className="py-3">
         <MyCard>
            <CardImg src={ "https://picsum.photos/100/180" } alt={ 'product image' }/>
            <CardBody>
               <CardTitle>
                  { product_name }
               </CardTitle>
               <CardDesc>
                  <del
                     className="mr-3"
                     style={
                        product_discount_price === 0
                           ? { display: "none" }
                           : { display: "inline" }
                     }
                  >
                     { product_discount_price > 0 ? product_price : null }$
                  </del>
                  <Badge variant="dark">
                     { product_discount_price === 0
                        ? product_price
                        : product_discount_price }
                     $
                  </Badge>
               </CardDesc>
               <Button
                  variant={ test ? "danger" : "success" }
                  onClick={ ( e ) => onSelectProduct( product_id, e ) }
                  data-selected={ test }
               >
                  { test ? "Remove" : "Add to cart" }
               </Button>
            </CardBody>
         </MyCard>
      </Col>
   )
}
export default React.memo(Product);



