import Nav from './components/Nav';
import Tarjeta from './components/Tarjeta';

import './App.css';
import productsInfo from'./productsInfo'

function App() {
  return (
    <div>
      <Nav/>
      <main className="container">
        {productsInfo.map((product,index) => (
          <Tarjeta
            key={product.nombre + index}
            img={product.img}
            nombre={product.nombre}
            descripcion={product.descripcion}
            precio={product.precio}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
