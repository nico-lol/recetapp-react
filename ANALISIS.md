Componente:
¿Donde lo usas en este problema?
-- Renderiza cada receta individual
-- Lista todas las recetas filtradas
-- Botones para filtrar por categoría
-- App para Coordinar estado y renderizar todo

¿Por que es el adecuado?
Porque permiten reutilizar la misma estructura visual para las 12 recetas y actualizar dinámicamente la interfaz cuando se cambia el filtro de categoría sin recargar la página.

JSX:
¿Donde lo usas en este problema?
Los componentes en JSX son etiquetas personalizadas que reciben datos (props) y renderizan interfaz que se actualiza automáticamente cuando cambia el estado.

¿Por que es el adecuado?
JSX mezcla HTML con JavaScript, permitiendo renderizar dinámicamente las 12 recetas y actualizar automáticamente la interfaz cuando el usuario cambia el filtro de categoría.

Props:
¿Donde lo usas en este problema?
Los props se usan para pasar datos de un componente a otro

¿Por que es el adecuado?
Son adecuados porque permiten que un mismo componente reciba datos diferentes para cada receta, manteniendo el código reutilizable y flexible sin duplicar código.

Estado (useState)
¿Donde lo usas en este problema?
Guardar la categoría seleccionada por el usuario. Se actualiza el estado y React automáticamente filtra y renderiza solo las recetas de esa categoría.

¿Por que es el adecuado?
Porque permite guardar la categoría seleccionada y reaccionar automáticamente: cuando el usuario elige una categoría, React actualiza el estado y re-renderiza solo las recetas filtradas sin recargar la página (SPA).

Renderizado de lista(.map + key)
¿Donde lo usas en este problema?
En RecetasList, para iterar sobre las 12 recetas filtradas y renderizar un <RecetaCard> para cada una, usando key={receta.id} para que React identifique cada elemento único.

¿Porque es el adecuado?
Porque .map convierte el array de 12 recetas en elementos JSX eficientemente, y key={receta.id} permite que React identifique cada receta de forma única para actualizar solo las que cambian cuando se filtra por categoría, evitando bugs de renderizado.

Renderizado condicional:
¿Donde lo usas en este problema?
En RecetaCard, mostrar un badge o icono de "Vegetariana" solo si la propiedad esVegetariana es true. Así se resaltan visualmente las recetas vegetarianas sin mostrar nada en las no vegetarianas.

¿Porque es el adecuado?
Porque permite mostrar visualmente solo lo necesario: el badge "Vegetariana" aparece únicamente en las recetas que lo son, cumpliendo el requisito de resaltar opciones vegetarianas de forma clara y eficiente sin renderizar elementos innecesarios.

1. ¿Que ventaja tiene dividir el recetario en componentes en lugar de escribir todo en un solo archivo?
R: Dividir en componentes evita duplicar código (RecetaCard se reutiliza 12 veces), facilita el mantenimiento (un cambio en RecetaCard afecta todas las recetas), clarifica responsabilidades, permite testear cada componente independientemente y hace el código escalable para futuros cambios.

2. ¿Que diferencia hay entre props y estado en tu solucion? Da un ejemplo concreto de cada uno tomado de esta aplicacion
R: Props son datos de solo lectura que un componente a otro. (Ejemplo: App pasa receta a RecetaCard), mientras que el estado son datos locales y mutables que viven en un componente. (Ejemplo: Categoria en la app que cambia cuando el usuario hace click en "Postre"). La diferencia es que los props bajan de un componente sin poder cambiar en el otro.