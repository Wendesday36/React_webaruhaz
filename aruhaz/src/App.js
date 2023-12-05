
import './App.css';
import Termekek from './Termekek';
import {termekek} from "./KepLista";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Békuci áruhaz</h1>
      </header>
      <aside>
      <Termekek obj ={termekek[aktTermek]}/></aside>
      <article>
        <Termekek />
      </article>
      <footer>Berta Zoé Anna</footer>
    </div>
  );
}

export default App;
