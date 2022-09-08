import React from "react";
import Item from "../Item";

const ItemList = ({ data = [] }) => {
	return data.map((model) => <Item key={model.id} info={model} />);
};

export default ItemList;
