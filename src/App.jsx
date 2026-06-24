import { useState } from 'react'
import { recetas } from './data/recetas'
import ListaRecetas from './components/ListaRecetas'
import './App.css'

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Entrada')

  const recetasFiltradas = recetas.filter(
    (receta) => receta.categoria === categoriaSeleccionada
  )

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📖 RecetApp - Recetario Digital</h1>
        <p>Explora nuestras deliciosas recetas de cocina</p>
      </header>

      <nav className="categorias-filtro">
        {['Entrada', 'Fondo', 'Postre'].map((categoria) => (
          <button
            key={categoria}
            className={`btn-categoria ${categoriaSeleccionada === categoria ? 'activo' : ''}`}
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
            {categoria}
          </button>
        ))}
      </nav>

      <main className="contenido-principal">
        <h2>{categoriaSeleccionada}</h2>
        <p className="contador-recetas">{recetasFiltradas.length} recetas encontradas</p>
        <ListaRecetas recetas={recetasFiltradas} />
      </main>
    </div>
  )
}

export default App
