import React from 'react'
import lanche from '../../../assets/lanche.svg'
import { HiOutlineTrash } from 'react-icons/hi'
import './style.css'

// import { Container } from './styles';

function Compras({ carrinho, setCarrinho }) {
  function removeFromCart(elem){
    setCarrinho([...carrinho].filter(elemento => elemento.id !== elem.id))
  }

  function handleCount(element, operador) {
    if(element.count == 1 && !operador){
      removeFromCart(element); 
      return;
    }

    setCarrinho([...carrinho].map(elem => {
      if(elem.id === element.id){
        return operador ? {...elem, count: elem.count + 1} : {...elem, count: elem.count - 1}
      }
      return elem;
    }))
  }
  
  function handleRemove(item) {
    removeFromCart(item);
  }

  return (
    <>
      {carrinho?.map(elem => (
        <>
          <li key={elem.id} className="li_compra">
            <figure>
              <img src={elem.img} alt="" />
            </figure>
            <div className="div_compra">
              <h4>{elem.name}</h4>
              <span>{elem.category}</span>
              <div className="count">
                <button
                  onClick={() => handleCount(elem, false)}
                  className="retirar"
                >
                  -
                </button>
                <p>{elem.count} </p>
                <button
                  onClick={() => handleCount(elem, true)}
                  className="adicionar"
                >
                  +
                </button>
              </div>
            </div>
            <div className="div_trash">
              <button onClick={() => handleRemove(elem)}>
                <HiOutlineTrash className="trash" />
              </button>
            </div>
          </li>
        </>
      ))}
    </>
  )
}

export default Compras
