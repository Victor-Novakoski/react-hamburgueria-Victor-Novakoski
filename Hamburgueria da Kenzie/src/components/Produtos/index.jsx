import React, { useState } from 'react'
import './style.css'
// import { Container } from './styles';

function Produtos({ data, carrinho, setCarrinho }) {
  const addToCart = () => {
    if(carrinho.find(e => e.id === data.id)){
      setCarrinho(
        [...carrinho].map(elem => {
          if(elem.id === data.id){
            return {...elem, count: elem.count + 1}
          }else{
            return elem
          }
        })
      )
    }else(
      setCarrinho([...carrinho, {
        ...data,
        count: 1
      }])
    )
  }
  return (
    <>
      <li className="card">
        <figure>
          <img src={data.img} alt={data.name} />
        </figure>
        <div className="card_info">
          <h2>{data.name}</h2>
          <span>{data.category}</span>
          <p>R$ {data.price}</p>
          <button onClick={() => addToCart()}>Adicionar</button>
        </div>
      </li>
    </>
  )
}

export default Produtos
