export default function Termek(props){

    function kattintas(){
        console.log("katt",props.index)
        props.kattintas(props.index)
    }

    return(
        <div className="kep" >
        <h2>{props.obj.nev}</h2>
            <img src={props.obj.src} alt=""/>
        <div className="container">
        <p>{props.obj.leiras}</p>
        <p>{props.obj.ar}</p>
        <button type="button" onClick={kattintas}>Kosárba</button>
        </div>
        </div>
    )
}