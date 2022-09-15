import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";

const models = [
	{
		id: 1,
		description: "La iluminación usando Neopixel led es clave para eventos, recitales, efectos de iluminación, etc.",
		image:
			"https://rgbestudio.com.ar/wp-content/uploads/2021/03/Puntera-conector-2.png",
		title: "Cubo",
		category: "models",
		price:"$50",
	},
	{
		id: 2,
		description: "La perfecta calidad de los simuladores de competición de VRacer nos llevó a Diseñar en 3D una carcasa donde alojar la pantalla display que usan como una extensión del simulador.",
		image:
			"https://rgbestudio.com.ar/wp-content/uploads/2021/04/Molde-3.png",
		title: "Diafragma",
		category: "models",
		price:"$30",
	},
	{
		id: 3,
		description: "El gran poder del caucho de silicona. Material perfecto para este caso. Diseñamos un diafragma para equipo médico, un anesteciador. ",
		image:
			"https://rgbestudio.com.ar/wp-content/uploads/2020/12/6565-768x432.png",
		title: "Carcasa",
		category: "tools",
		price:"$20",
	},
];

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(models);
			}, 1000);
		});
		getData.then((res) =>
			setData(res.find((model) => model.id === parseInt(detalleId))),
		);
	}, [detalleId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
