import React from 'react';
import './style.css'

// import { Container } from './styles';

function CarrinhoVazio() {
  return <div className='container'>
    <h2>Sua sacola está vazia</h2>
    <p>Adicione itens</p>
  </div>;
}

export default CarrinhoVazio;