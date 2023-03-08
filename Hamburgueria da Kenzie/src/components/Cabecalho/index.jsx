import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../../assets/logo.svg'
import './style.css'

function Cabecalho({ setSearch }) {
  return (
    <header>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div className="div_search">
        <input
          type="text"
          onChange={event => {
            setSearch(event.target.value)
          }}
        />
        <button onClick={event => setSearch(event.target.value)} type="button">
          Pesquisar <AiOutlineSearch />
        </button>
      </div>
    </header>
  )
}

export default Cabecalho
