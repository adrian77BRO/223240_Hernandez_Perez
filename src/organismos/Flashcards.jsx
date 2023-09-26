import { Flashcard } from '../moleculas/Flashcard';
import { Subtitulo } from '../atomos/Subtitulo';

export function Flashcards({ datos, subtitulo }) {
    return (
        <div>
            <Subtitulo sub={subtitulo} />
            <br></br>
            <div className='container' style={{paddingLeft: '65px'}}>
                <div className='row'>
                    {datos.map((card, id) => (
                        <div className="col">
                            <Flashcard key={id} pregunta={card.pregunta} respuesta={card.respuesta} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}