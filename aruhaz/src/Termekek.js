import Termek from "./Termek";
import {termekek} from "./KepLista";
import  {useState} from 'react';
export default function Termekek(){
    const [aktTermek,setAktTermek]=useState(0) 
    function kattintas(index) {
    
        console.log(index);
        setAktTermek(index) 
        /*itt kapja a gyerekkomponenstol az adatot*/
      }
    return(

        <div className="termekek">
        {termekek.map((elem, index) => {
          return (
            <Termek obj={elem}  key={index} index={index} kattintas={kattintas} />
          );
        })}
      </div>
    )
}