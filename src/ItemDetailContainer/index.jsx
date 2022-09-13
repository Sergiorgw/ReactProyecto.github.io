import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";

const model = {
	id: 1,
	description: "La iluminación usando Neopixel led es clave para eventos, recitales, efectos de iluminación, etc.",
	image:
		"https://rgbestudio.com.ar/wp-content/uploads/2021/03/Puntera-conector-2.png",
	title: "Cubo",
	price:"$50",
};

const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(model);
			}, 3000);
		});
		getData.then((res) => setData(res));
	}, []);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
