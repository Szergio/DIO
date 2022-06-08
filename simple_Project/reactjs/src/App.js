import './App.css';
import ButtonDefault from './global/ButtonDefault';
import Alert from './components/Alert';
import Class from './components/Class-teste';
import RenderTabela from './components/List_nomes';
//import Tabela from './array';
const texto = `Testando o texto no alert com botão. VERSÃO 2.0`;

function App() {
  return (
    <>
      <p>Olá tudo bem</p>
      <Class/>
      <ButtonDefault onClick={() => Alert({texto})} name = "CLICK-TESTE" />
      <RenderTabela/>
    </>
  );
}

export default App;
