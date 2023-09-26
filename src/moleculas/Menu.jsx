import { Opcion } from '../atomos/Opcion';

export function Menu({menu}) {
    return (
        <select className='menu' onChange={menu}>
            <Opcion />
        </select>
    );
}