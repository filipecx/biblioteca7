import { Card, Button } from 'react-bootstrap'

export function Cartao({nomeFilme, anoFilme, idFilme, tipoFilme, posterFilme}){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={posterFilme} height='200px' style={{objectFit: 'cover'}}/>
            <Card.Body>
                <Card.Title>{nomeFilme}</Card.Title>
                <Card.Text>
                {anoFilme}
                {tipoFilme}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}