import React from "react";

const InputField = (props) => {
	return (
		<div className="App-InputField">
			<form onSubmit={props.handleOnSubmitGroceryItem}>
				<input
					type="text"
					value={props.newGroceryItem.newGroceryItem}
					name="newGroceryItem"
					placeholder="Add something"
					onChange={props.handleChange}
				/>
				<button type="submit">ADD</button>
			</form>
		</div>
	);
};
export default InputField;
