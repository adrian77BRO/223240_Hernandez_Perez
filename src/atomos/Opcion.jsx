export function Opcion() {
    return (
        <>
            <option className='opcion'>-- Seleccionar --</option>
            <option className='opcion' value='animales'>Animales</option>
            <option className='opcion' value='vegetales'>Frutas y verduras</option>
            <option className='opcion' value='paises'>Países</option>
        </>
    );
}