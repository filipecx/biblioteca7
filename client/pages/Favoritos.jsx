import { Container, Row, Col } from 'react-bootstrap'
import { TituloPaginas } from '../components/TituloPaginas'

export function Favoritos(){
    return(
        <Container >                     
            <Row className='my-4'>
                <Col>
                    <TituloPaginas texto={'Favoritos'}  /> 
                </Col>            
            </Row>
        </Container>     
    )
}