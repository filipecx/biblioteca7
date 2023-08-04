import { useState, useEffect } from 'react'
import  Axios  from 'axios'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

export function Cartao({nomeFilme, anoFilme, idFilme, tipoFilme, posterFilme}){
    const [isFavorite, setFavorite] = useState(false)
    const [favoritos, listaFavoritos] = useState([])

    const getFav = async () => {
        await Axios.get(`http://localhost:3000/filmes`)
        .then((res) => {
            listaFavoritos(res.data[0].idFilme)
            
        })
    }
    useEffect(() => {
        getFav()
        console.log(favoritos)

    }, [])

    const toggleFavorite = async () => {
        setFavorite(!isFavorite)
        await Axios.post(`http://localhost:3000/filmes/${idFilme}`, idFilme)
        .then(function(response){
            console.log(response)
        })

    }
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={posterFilme} height='200px' style={{objectFit: 'cover'}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>{nomeFilme}</Card.Title>
                <Card.Text className='d-flex justify-content-between align-items-baseline'>
                    <span>{anoFilme}</span>   
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="dark">Ver mais</Button>
                    <Button variant={'dark'} onClick={toggleFavorite} >{isFavorite ? <FontAwesomeIcon icon={faHeart}/>: <FontAwesomeIcon icon={farHeart} />}</Button>
                </div>             
            </Card.Body>
        </Card>
    )
}