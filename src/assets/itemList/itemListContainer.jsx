import React from "react";

const ItemListContainer = (props) => {

    const {
        producto
    } = props;

    return (
        <div>


{
    producto.map((elemento)=>{
        return <li>{elemento}</li>
    })
}


        </div>
    )
}

export default ItemListContainer;