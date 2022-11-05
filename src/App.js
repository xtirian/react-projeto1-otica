import './App.css';
// the global styles is been doing at the App.css. The particulars styles will be set at each style.css of each component


import Conteudo from './Componentes/Conteudo/index.js';
import Topo from './Componentes/Topo'
import Rodape from './Componentes/Rodape'

function App() {
  return (
    <div className="App">
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
