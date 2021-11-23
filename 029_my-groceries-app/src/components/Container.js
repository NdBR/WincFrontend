import React, { Component } from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends Component {
	constructor() {
		super();
		this.state = {
			newGroceryItem: "",

			groceryItems: [
				{ id: 1, title: "Apples2", amount: 1 },
				{ id: 2, title: "Carton of milk", amount: 1 },
				{ id: 3, title: "Beer", amount: 1 },
			],
			shoppingListItems: [{ id: 2, title: "Carton of milk", amount: 1 }],
		};
		this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
		this.addToShoppingList = this.addToShoppingList.bind(this);
		this.handleClickEmptyCart = this.handleClickEmptyCart.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleOnSubmitGroceryItem = this.handleOnSubmitGroceryItem.bind(this);
		this.addAmountToItem = this.addAmountToItem.bind(this);
	}
	handleClickGroceryItem = (item) => {
		const { shoppingListItems } = this.state;
		!shoppingListItems.some((gro) => gro.id === item.id)
			? this.addToShoppingList(item)
			: this.addAmountToItem(item);
	};

	addToShoppingList = (groceryItem) => {
		this.setState({
			shoppingListItems: [...this.state.shoppingListItems].concat([
				groceryItem,
			]),
		});
	};

	handleClickEmptyCart = () => this.setState({ shoppingListItems: [] });

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleOnSubmitGroceryItem = (event) => {
		this.setState({
			groceryItems: [...this.state.groceryItems].concat([
				{
					id: this.state.groceryItems.length + 1,
					title: this.state.newGroceryItem,
					amount: 1,
				},
			]),
		});
		this.setState({ newGroceryItem: "" });
		event.preventDefault();
		event.target.reset();
	};
	addAmountToItem = (item) => {
		const newShoppingListArray = this.state.shoppingListItems.map(
			(duplicateItem) => {
				item.id === duplicateItem.id && duplicateItem.amount++;
				return duplicateItem;
			}
		);
		this.setState({ shoppingListItems: newShoppingListArray });
	};

	render() {
		return (
			<div className="App-Container">
				<div>
					<h3>Boodschappenlijst</h3>
					<GroceryList
						newGroceryItem={this.state.newGroceryItem}
						handleChange={this.handleChange}
						handleOnSubmitGroceryItem={this.handleOnSubmitGroceryItem}
						Items={this.state.groceryItems}
						handleClickGroceryItem={this.handleClickGroceryItem}
					/>
				</div>
				<div>
					<h3>Winkelmand</h3>
					<ShoppingCart
						Items={this.state.shoppingListItems}
						handleClickGroceryItem={this.handleClickGroceryItem}
						handleClickEmptyCart={this.handleClickEmptyCart}
					/>
				</div>
			</div>
		);
	}
}

export default Container;
