import React from "react";
import List from "./List";

function ShoppingCart(props) {
	return (
		<div className="App-ShoppingCart">
			<button onClick={() => props.handleClickEmptyCart()}>
				Empty Shopping Cart
			</button>
			<List
				Items={props.Items}
				handleClickGroceryItem={props.handleClickGroceryItem}
				readonly
			/>
		</div>
	);
}

export default ShoppingCart;
