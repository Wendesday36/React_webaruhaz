import Termek from "./Termek";
import {termekek} from "./KepLista";

export default function Termekek(props){
    function kattintas(index) {
    
        console.log(index);
        props.kattintas(index)
        /* setAktTermek(index) */ 
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