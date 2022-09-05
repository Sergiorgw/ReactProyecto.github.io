import React from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";

export const ItemListContainer = ({texto}) =>{
    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades `)
    }
    return(
        <><Title greeting='Texto' />
        <ItemCount initial={3} stock={8} onAdd={onAdd} />
        </>
    );
}
 export default ItemListContainer;





