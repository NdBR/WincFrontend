import React from "react";
import ListItem from "./ListItem.js";

function List(props) {
	const item = props.Items.map((item) => (
		<ListItem
			key={item.id}
			item={item}
			value={item.title}
			handleClickGroceryItem={props.handleClickGroceryItem}
			readonly={props.readonly}
		/>
	));
	return (
		<div className="App-List">
			<ul>{item}</ul>
			{/* {console.log(props.Items)} */}
		</div>
	);
}
export default List;
