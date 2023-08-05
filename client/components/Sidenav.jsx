import { Navbar, Nav, Button, Col, Row, Stack } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Sidenav(){
    return(
        <Nav className='sticky-top'  >
            <Stack gao={3}>
                <Nav.Link className='p-2 m-auto' to='/' as={NavLink}>X Home</Nav.Link>
                <Nav.Link className='p-2 m-auto' to='/favoritos' as={NavLink}>Favoritos</Nav.Link>
                <Nav.Link className='p-2 m-auto'>Atores</Nav.Link>
                <Nav.Link className='p-2 m-auto'>Sobre</Nav.Link>
                <Nav.Link className='p-2 m-auto'>Logout</Nav.Link>
            </Stack>
        </Nav>
    )
}