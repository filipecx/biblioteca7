import { Card, Button } from 'react-bootstrap'

export function Cartao({nomeFilme, anoFilme, idFilme, tipoFilme, posterFilme}){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={posterFilme} height='200px' style={{objectFit: 'cover'}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>{nomeFilme}</Card.Title>
                <Card.Text className='d-flex justify-content-between align-items-baseline'>
                    <span>{anoFilme}</span>   
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="dark">Ver mais</Button>
                    <Button variant="dark">X</Button>
                </div>             
            </Card.Body>
        </Card>
    )
}