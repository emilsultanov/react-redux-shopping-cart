import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
   remove_product_from_cart,
   change_quantity_of_product,
} from "../store/actions/shoppingCartActions";
import { ListGroup, Button, Form, Badge } from "react-bootstrap";

function CartItem( {
                      product_name,
                      product_price,
                      product_discount_price,
                      product_id,
                   } ) {


   const dispatch = useDispatch();
   const [ selectValue, setSelectValue ] = useState( 1 );
   const selectRef = useRef( selectValue );

   const onSelect = ( event ) => {
      let _selectValue = Number( event.target.value );
      selectRef.current = _selectValue;
      setSelectValue( _selectValue );
      dispatch(
         change_quantity_of_product( selectValue, selectRef.current, product_id )
      );
   };

   const onRemove = ( event ) => {
      dispatch( remove_product_from_cart( product_id ) );
   };
   return (
      <ListGroup.Item className="d-flex justify-content-between">
         <div className="cart__img">
            <img
               // src="https://picsum.photos/100/70"
               alt=""
               className="img-fluid"
            />
         </div>
         <div className="w-100 d-flex justify-content-between cart__info">
            <div className="left w-50 px-3 cart__info_left">
               <h6>{ product_name }</h6>
               <Button variant="danger" size="sm" onClick={ ( e ) => onRemove( e ) }>
                  Remove
               </Button>
            </div>
            <div className="right w-50 d-flex justify-content-between align-items-center cart__info_right">
               <Form.Control
                  as="select"
                  custom
                  className="w-auto"
                  value={ selectValue }
                  onChange={ onSelect }
               >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </Form.Control>

               <del
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
            </div>
         </div>
      </ListGroup.Item>
   );
}
export default React.memo(CartItem);
