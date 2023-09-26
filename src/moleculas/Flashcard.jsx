import { Palabra } from '../atomos/Palabra';
import { Imagen } from '../atomos/Imagen';
import { useState } from "react";

export function Flashcard({ pregunta, respuesta }) {
    const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

    const toggleRespuesta = () => {
        setMostrarRespuesta(!mostrarRespuesta);
    };

    return (
        <div className={`flashcard ${mostrarRespuesta ? 'show-answer bg-success text-light' : ''}`} onClick={toggleRespuesta}>
            <div className="flashcard-content">
                {mostrarRespuesta ? <Palabra resp={respuesta}/> : <Imagen preg={pregunta}/>}
            </div>
        </div>
    );
}