import React from "react";
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate(`/detail/${product.id}`)
    }
  
    return (
      <div onClick={handleNavigate}>
        <img src={product.image} width={350} alt="product"/>
        <h1>{product.title}</h1>
        <h1>Precio : {product.price}$</h1>
        <h1>Stock : {product.stock}Unidades</h1>
        <p onClick={handleNavigate}>Mas info</p>
      </div>
    )
  }
                
  export default Item