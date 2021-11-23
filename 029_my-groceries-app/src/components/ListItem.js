import React from "react";

function ListItem(props) {
	let readonly = props.readonly ? `quantity ${props.item.amount}` : "";

	return (
		<>
			<li onClick={() => props.handleClickGroceryItem(props.item)}>
				<span>{props.item.title}</span>
				<span>{readonly}</span>
			</li>
		</>
	);
}

export default ListItem;
