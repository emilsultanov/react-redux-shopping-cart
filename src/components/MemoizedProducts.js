// import React from "react";
// import { useEffect, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetch_products } from "../store/actions/shoppingCartActions";
// import { Container, Row } from "react-bootstrap";
// import { MemoizedProduct } from "./MemoizedProduct";
//
// const Products = () => {
//    const dispatch = useDispatch();
//    const products = useSelector( ( state ) => state.products );
//
//    const onFetchProducts = useCallback( () => {
//       dispatch( fetch_products() );
//    }, [ dispatch ] );
//
//    useEffect( () => {
//       onFetchProducts();
//    }, [ onFetchProducts ] );
//
//    return (
//       <div className="products py-5">
//          <Container>
//             <Row>
//                { products &&
//                products.map( ( product ) => {
//                   return (
//                      <MemoizedProduct
//                         key={ product.product_id }
//                         { ...product }
//                      />
//                   );
//                } ) }
//             </Row>
//          </Container>
//       </div>
//    );
// };
//
// export const MemoizedProducts = React.memo( Products );
