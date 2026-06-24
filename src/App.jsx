import { useState } from 'react'
import { recetas } from './data/recetas'
import ListaRecetas from './components/ListaRecetas'
import FiltroCategoria from './components/FiltroCategoria'
import './App.css'

// Función para validar y normalizar entrada del usuario
const normalizarBusqueda = (texto) => {
  const MAX_LARGO = 50
  return texto.trim().slice(0, MAX_LARGO)
}

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const recetasFiltradas = recetas.filter((receta) => {
    const coincideCategoria = categoriaSeleccionada === 'Todas' || receta.categoria === categoriaSeleccionada
    const coincideBusqueda = receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  const handleBusquedaChange = (e) => {
    const textoSanitizado = normalizarBusqueda(e.target.value)
    setBusqueda(textoSanitizado)
  }

  const recetasVegetarianas = recetasFiltradas.filter((receta) => receta.esVegetariana).length

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📖 RecetApp - Recetario Digital</h1>
        <p>Explora nuestras deliciosas recetas de cocina</p>
      </header>

      <div className="busqueda-contenedor">
        <input
          type="text"
          placeholder="🔍 Buscar por nombre de receta..."
          value={busqueda}
          onChange={handleBusquedaChange}
          className="campo-busqueda"
          maxLength="50"
        />
      </div>

      <FiltroCategoria 
        categoriaSeleccionada={categoriaSeleccionada}
        onChange={setCategoriaSeleccionada}
      />

      <main className="contenido-principal">
        <h2>{categoriaSeleccionada === 'Todas' ? 'Todas las Recetas' : categoriaSeleccionada}</h2>
        <div className="estadisticas">
          <p className="contador-recetas">{recetasFiltradas.length} recetas encontradas</p>
          {recetasVegetarianas > 0 && (
            <p className="contador-vegetarianas">🥗 {recetasVegetarianas} vegetariana{recetasVegetarianas !== 1 ? 's' : ''}</p>
          )}
        </div>
        {recetasFiltradas.length === 0 ? (
          <p className="sin-resultados">No hay recetas que coincidan</p>
        ) : (
          <ListaRecetas recetas={recetasFiltradas} />
        )}
      </main>
    </div>
  )
}

export default App
