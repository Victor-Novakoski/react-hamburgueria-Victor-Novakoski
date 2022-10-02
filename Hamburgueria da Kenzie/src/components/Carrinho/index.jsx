import React from 'react'
import Compras from './Compras'
import './style.css'
import CarrinhoVazio from '../CarrinhoVazio'
// import { Container } from './styles';

function Carrinho({ carrinho, setCarrinho }) {
  const total = carrinho.reduce((acc, item) => acc + item.price * item.count, 0)
  function removeFromCart(event) {
    setCarrinho([...carrinho].filter(elemento => elemento === event))
  }
  return (
    <>
      <div className="div_carrinho">
        <h4>Carrinho de Compras</h4>
      </div>
      {carrinho.length == 0 ? (
        <CarrinhoVazio />
      ) : (
        <div className="div_info_carrinho">
          <div className="div_lista">
            <ul className="ul_lista">
              <Compras carrinho={carrinho} setCarrinho={setCarrinho} />
            </ul>
          </div>
          <div className="div_total">
            <div className="div_totalMoney">
              <p>Total:</p> <span>R$ {total.toFixed(2)}</span>
            </div>
            <button onClick={event => removeFromCart(event)}>
              Remover Todos
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Carrinho
