import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import './App.css'
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'
import api from './services/api'
import Loading from './components/Loading'

function App() {
  const [products, setProduts] = useState([])
  const [carrinho, setCarrinho] = useState([])
  const [search, setSearch] = useState('')
  
  const filteredProducts = products.filter(product => 
    search === '' ? true : product.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    api.get('/products').then(resp => setProduts(resp.data))
  }, [])

  return (
    <div className="App">
      <Cabecalho
        setSearch={setSearch}
      />
      <main>
        <section className="div_produto">
          <ul className="ul_produto">
            {products.length == 0 ? (
              <Loading />
            ) : (
              filteredProducts.map(product => (
                <Produtos
                  key={product.id}
                  data={product}
                  setCarrinho={setCarrinho}
                  carrinho={carrinho}
                />
              ))
            )}
          </ul>
        </section>
        <section className="carrinho">
          <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
        </section>
      </main>
    </div>
  )
}

export default App
