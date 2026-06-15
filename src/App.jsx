import e from './App.module.css'
import produtos from './constants/plantas.json'
import { Card } from './components/card'

function App() {

  return (
    <>
      <h1 className={e.titulo}>Página de produtos</h1>
      <main className={e.principal}>
        {produtos.map((item) => {
          return(
            <div key={item.id} className={e.card}>
              <Card imagem={item.image} nome={item.name} descricao={item.desc} valor={item.value}/>
            </div>
          )
        })}

      </main>
    </>
  )
}

export default App
