import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
	return (
		<Link href="" className="models">
			<img src={info.image} alt="" />
			<p>{info.title}</p>
		</Link>
	);
};

export default Item;
