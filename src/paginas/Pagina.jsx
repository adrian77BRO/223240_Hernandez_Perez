import { animales, vegetales, paises } from "../datos";
import { useState } from "react";
import { Barra } from '../moleculas/Barra';
import { Boton } from '../atomos/Boton';
import { Menu } from '../moleculas/Menu';
import { Flashcards } from '../organismos/Flashcards';

export function Pagina() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  const claseModo = modoOscuro ? 'modo-oscuro' : 'modo-claro';
  return (
    <div className={`pagina ${claseModo}`}>
      <Barra />
      <br></br>
      <div>
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col-2 col-lg-2'>
              <Boton boton={toggleModo} clase={modoOscuro} />
            </div>
            <div className='col-8 col-lg-2'>
              <Menu menu={handleSeleccion}/>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {opcionSeleccionada === '' && <h1 style={{ textAlign: 'center' }}>Fichas de aprendizaje</h1>}
        {opcionSeleccionada === 'animales' && <Flashcards datos={animales} subtitulo={'Animales'} />}
        {opcionSeleccionada === 'vegetales' && <Flashcards datos={vegetales} subtitulo={'Frutas y verduras'} />}
        {opcionSeleccionada === 'paises' && <Flashcards datos={paises} subtitulo={'Países'} />}
      </div>
      <br></br>
    </div>
  );
}