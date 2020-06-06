// import React from "react";
// import { useSelector } from "react-redux";
// import CartItem from "./CartItem";
// import { Container, Row, Col, ListGroup, Card, Badge } from "react-bootstrap";
//
// const Cart = () => {
//    const cartProducts = useSelector( ( state ) => state.cartProducts );
//    let totalQuantityOfProducts = useSelector(
//       ( state ) => state.totalQuantityOfProducts
//    );
//    let totalPriceOfProducts = useSelector(
//       ( state ) => state.totalPriceOfProducts
//    );
//    let discountPriceOfProducts = useSelector(
//       ( state ) => state.discountPriceOfProducts
//    );
//    let mainPriceOfProducts = useSelector( ( state ) => state.mainPriceOfProducts );
//
//    return (
//       <div className="cart py-5">
//          <Container>
//             <Row>
//                <Col lg={ 8 }>
//                   <ListGroup className="border-0">
//                      { cartProducts.length > 0 ? (
//                         cartProducts.map( ( cartProduct ) => {
//                            return (
//                               <CartItem
//                                  key={ cartProduct.product_id }
//                                  { ...cartProduct }
//                               />
//                            );
//                         } )
//                      ) : (
//                         <h3>Cart is empty</h3>
//                      ) }
//                   </ListGroup>
//                </Col>
//                <Col lg={ 4 }>
//                   { cartProducts.length > 0 && (
//                      <Card>
//                         <Card.Header>
//                            <h5 className="m-0">Order List</h5>
//                         </Card.Header>
//                         <ListGroup variant="flush">
//                            <ListGroup.Item className="d-flex justify-content-between">
//                               <span>Quantity of products</span>
//                               <Badge
//                                  variant="primary"
//                                  style={ { lineHeight: "unset" } }
//                               >
//                                  { totalQuantityOfProducts }
//                               </Badge>
//                            </ListGroup.Item>
//                            <ListGroup.Item className="d-flex justify-content-between">
//                               <span>Total price of products</span>
//                               <Badge
//                                  variant="dark"
//                                  style={ { lineHeight: "unset" } }
//                               >
//                                  { totalPriceOfProducts }$
//                               </Badge>
//                            </ListGroup.Item>
//                            <ListGroup.Item className="d-flex justify-content-between">
//                               <span>Discount price of products</span>
//                               <Badge
//                                  variant="success"
//                                  style={ { lineHeight: "unset" } }
//                               >
//                                  { discountPriceOfProducts }$
//                               </Badge>
//                            </ListGroup.Item>
//                            <ListGroup.Item className="d-flex justify-content-between">
//                               <span>Main price of products</span>
//                               <Badge
//                                  variant="warning"
//                                  style={ { lineHeight: "unset" } }
//                               >
//                                  { mainPriceOfProducts }$
//                               </Badge>
//                            </ListGroup.Item>
//                         </ListGroup>
//                      </Card>
//                   ) }
//                </Col>
//             </Row>
//          </Container>
//       </div>
//    );
// };
//
// export const MemoizedCart = React.memo( Cart );
