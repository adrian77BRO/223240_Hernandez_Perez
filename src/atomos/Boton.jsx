import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export function Boton({boton, clase}) {
    return (
        <button className='btn btn-outline-success' onClick={boton}>{clase ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}</button>
    );
}