import { Container, Navbar } from 'react-bootstrap';

export function Barra() {
    return (
        <Navbar expand="lg" className="bg-success">
            <Container>
                <Navbar.Brand className='text-light'>Flashcards</Navbar.Brand>
            </Container>
        </Navbar>
    );
}