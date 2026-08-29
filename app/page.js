"use client";
import { useState } from "react";
export default function Home() {
  const[ventanita, setVentanita] = useState(false);
  const[estante, setEstante] = useState(false);
  const[leyendo, setLeyendo] = useState(false);
  const[ProxLectura, setProxLec] = useState(false);
  const[logros, setLogros] = useState(false);
  const[mensajes, setMens] = useState(false);
  const[sugerencia, setSugerencia] = useState(false);
  const[aleatorio, setAleatorio] = useState(false);
  const[mvalorados, setMValorados] = useState(false);
  return (

    <main>
      <h1>TITULO...</h1>

      <button className = "b_catalogo" onClick={()=>setVentanita(true)}>
        <span>Disponible</span>
        <img src="/imagen/catalogo.png" alt= "Catalogo"/>
      </button>

      {ventanita && (
        <div className="ventanita">
          <h2>Buscar</h2>

          <button className="cerrar" onClick={()=>setVentanita(false)}>
            Cerrar
          </button>
      </div>
      )}


      <button className="b_estante" onClick={()=>setEstante(true)}>
        <span>Biblioteca</span>
        <img src="/imagen/estante.png" alt= "Estante"/>
      </button>

      {estante && (
        <div className="estantecito">
          <button className="leyendo" onClick={()=>setLeyendo(true)}>
            Leyendo...
          </button>

          <button className="proxLectura" onClick={()=>setProxLec(true)}>
            Próxima lectura
          </button>

          <button className="cerrar" onClick={()=> setEstante(false)}>
            Cerrar
          </button>
    </div>
    )}

      {leyendo && ( 
        <div className="vent_leyendo">
        <h3>Libros actuales: </h3>

        <button className="cerrar" onClick={() => setLeyendo(false)}>
          Cerrar
        </button>
      </div>
    )}

    {ProxLectura && ( 
        <div className="vent_proxLect">
        <h3>Próximos libros: </h3>

        <button className="cerrar" onClick={() => setProxLec(false)}>
          Cerrar
        </button>
      </div>
    )}

    <button className="b_logros" onClick={()=>setLogros(true)}>
      <span>Logros ☆</span>
    <img src="/imagen/logros.png" alt= "logros"/>
    </button>

    {logros && (
      <div className="logros">
        <h5>LOGROS☆</h5>

        <button className="cerrar" onClick={()=>setLogros(false)}>
            Cerrar
        </button>
      </div>
    )}

    <button className="b_mensajes" onClick={()=>setMens(true)}>
      <span>Mensajes</span>
    <img src="/imagen/mensajes.png" alt= "mensajes"/>
    </button>

    {mensajes && (
      <div className="mensajes">
        <h5>Próximamente...</h5>

        <button className="cerrar" onClick={()=>setMens(false)}>
            Cerrar
        </button>
      </div>
    )}

    <button className="b_sugerencia" onClick={()=>setSugerencia(true)}>
      <span>Sugerencias</span>
    <img src="/imagen/libro1.png" alt= "sugerencia"/>
    </button>

    {sugerencia && (
      <div className="sugerencia">
        <h5>Próximamente...</h5>

        <button className="cerrar" onClick={()=>setSugerencia(false)}>
          Cerrar
        </button>
      </div>
    )}

    <button className="b_aleatorio" onClick={()=>setAleatorio(true)}>
      <span>Aleatorio 🎲</span>
    <img src="/imagen/libro2.png" alt= "aleatorio"/>
    </button>

    {aleatorio && (
      <div className="aleatorio">
        <h5>Tu próximo libro será...</h5>

        <button className="cerrar" onClick={()=>setAleatorio(false)}>
          Cerrar
        </button>
      </div>
    )}
  
    <button className="b_mvalorados" onClick={()=>setMValorados(true)}>
      <span>Mejor valorados 🌟</span>
    <img src="/imagen/libro3.png" alt= "mvalorados"/>
    </button>

    {mvalorados && (
      <div className="mvalorados">
        <h5>Los mejor valorados son...</h5>

        <button className="cerrar" onClick={()=>setMValorados(false)}>
          Cerrar
        </button>
      </div>
    )}
    


    </main>
  );
}
