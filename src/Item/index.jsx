import React from "react";
import "./item.css";

const Item = ({ info }) => {
	return (
		<a href="" className="model">
			<img src={info.image} alt="" />
			<p>{info.title}</p>
		</a>
	);
};

export default Item;