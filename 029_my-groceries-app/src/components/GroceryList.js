import React from "react";
import InputField from "./InputField";
import List from "./List";

const GroceryList = (props) => {
	return (
		<div className="App-GroceryList">
			<InputField
				handleChange={props.handleChange}
				newGroceryItem={props.newGroceryItem}
				handleOnSubmitGroceryItem={props.handleOnSubmitGroceryItem}
			/>
			<List
				Items={props.Items}
				handleClickGroceryItem={props.handleClickGroceryItem}
			/>
			{/* {console.log(props.Items)} */}
		</div>
	);
};

export default GroceryList;
