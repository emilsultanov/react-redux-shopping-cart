// import React, { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { select_product } from "../store/actions/shoppingCartActions";
// import { Card, Col, Button, Badge } from "react-bootstrap";
//
// const Product = ( {
//                      product_name,
//                      product_price,
//                      product_discount_price,
//                      product_id,
//                   } ) => {
//    const dispatch = useDispatch();
//    const cartProducts = useSelector( ( state ) => state.cartProducts );
//    const cartProductsId = cartProducts.map( ( item ) => item.product_id );
//    const test = cartProductsId.includes( product_id );
//
//    const onSelectProduct = ( id, event ) => {
//       let isSelected = event.target.dataset.selected === "false";
//       dispatch( select_product( id, isSelected ) );
//    };
//
//    return (
//       <Col lg={ 3 } className="py-3">
//          <Card className="h-100 ">
//             <Card.Img
//                className="img-fluid"
//                variant="top"
//                // src="https://picsum.photos/100/70"
//             />
//             <Card.Body className="d-flex flex-column align-items-start align-content-between ">
//                <Card.Title>
//                   <span>{ product_name }</span>
//                </Card.Title>
//                <Card.Text>
//                   <del
//                      className="mr-3"
//                      style={
//                         product_discount_price === 0
//                            ? { display: "none" }
//                            : { display: "inline" }
//                      }
//                   >
//                      { product_discount_price > 0 ? product_price : null }$
//                   </del>
//
//                   <Badge variant="dark">
//                      { product_discount_price === 0
//                         ? product_price
//                         : product_discount_price }
//                      $
//                   </Badge>
//                </Card.Text>
//
//                <Button
//                   variant={ test ? "danger" : "success" }
//                   onClick={ ( e ) => onSelectProduct( product_id, e ) }
//                   data-selected={ test }
//                >
//                   { test ? "Remove" : "Add to cart" }
//                </Button>
//             </Card.Body>
//          </Card>
//       </Col>
//    );
// };
//
// export const MemoizedProduct = React.memo( Product );
