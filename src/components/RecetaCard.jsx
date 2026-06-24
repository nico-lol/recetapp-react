import './RecetaCard.css';

function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {
  const categoriaClass = `categoria-${categoria.toLowerCase()}`;
  const vegetarianaClass = esVegetariana ? 'es-vegetariana' : '';

  return (
    <div className={`receta-card ${categoriaClass} ${vegetarianaClass}`}>
      <div className="receta-header">
        <h3 className="receta-titulo">{nombre}</h3>
        {esVegetariana && <span className="badge-vegetariana">🥗 Vegetariana</span>}
      </div>

      <div className="receta-info">
        <span className="info-item"><strong>Origen:</strong> {origen}</span>
        <span className="info-item"><strong>Categoría:</strong> <span className="categoria-badge">{categoria}</span></span>
        <span className="info-item"><strong>Porciones:</strong> {porciones}</span>
      </div>

      <p className="receta-descripcion">{descripcion}</p>

      <div className="receta-ingredientes">
        <h4>Ingredientes:</h4>
        <div className="ingredientes-lista">
          {ingredientes.map((ing, idx) => (
            <span key={idx} className="ingrediente-tag">✓ {ing}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecetaCard;
