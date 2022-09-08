import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import Title from "../Title";

const models = [
	{
		id: 1,
		image:
			"https://rgbestudio.com.ar/wp-content/uploads/2021/03/Puntera-conector-2.png",
		title: "Cubo",
	},
	{
		id: 2,
		image:
			"https://rgbestudio.com.ar/wp-content/uploads/2021/04/Molde-3.png",
		title: "Diafragma",
	},
	{
		id: 3,
		image:
			"https://rgbestudio.com.ar/wp-content/uploads/2020/12/6565-768x432.png",
		title: "Carcasa",
	},
];

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(models);
			}, 3000);
		});
		getData.then((res) => setData(res));
	}, []);

	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};

	return (
		<>
			<Title greeting={texto} />
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;





