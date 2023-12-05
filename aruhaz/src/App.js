
import './App.css';
import Termekek from './Termekek';
import {termekek} from "./KepLista";
import  {useState} from 'react';
function App() {
  const [aktTermek,setAktTermek]=useState(0) 
    function kattintas(index) {
    
        console.log(index);
        setAktTermek(index) 
        /*itt kapja a gyerekkomponenstol az adatot*/
      }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Békuci áruhaz</h1>
      </header>
      <aside>
      <Termekek obj ={termekek[aktTermek]}/></aside>
      <article>
        <Termekek kattintas={kattintas} />
      </article>
      <footer>Berta Zoé Anna</footer>
    </div>
  );
}

export default App;
