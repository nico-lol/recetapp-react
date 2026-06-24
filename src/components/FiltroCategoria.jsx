import './FiltroCategoria.css';

function FiltroCategoria({ categoriaSeleccionada, onChange }) {
  const categorias = ['Todas', 'Entrada', 'Fondo', 'Postre'];

  return (
    <nav className="filtro-categoria">
      <h3>Filtrar por categoría:</h3>
      <div className="botones-categoria">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`btn-categoria ${categoriaSeleccionada === categoria ? 'activo' : ''}`}
            onClick={() => onChange(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default FiltroCategoria;
