import { useState, useEffect, useContext } from 'react'
import  Axios  from 'axios'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

export function Cartao({nomeFilme, anoFilme, idFilme, tipoFilme, posterFilme, favoritado}){
    
    const [isFavorite, setFavorite] = useState(false)
    const toggleFavorite = async () => {
        if(favoritado){
            try{
                setFavorite(!isFavorite)
                await Axios.delete(`http://localhost:3000/filmes/${idFilme}`, 
                {
                    params: {idFilme: idFilme}
                })
            }catch(e){
                console.log(e)
            }           
        }else{
            try{
                setFavorite(!isFavorite)
                await Axios.post(`http://localhost:3000/filmes/${idFilme}`, idFilme)
                .then(function(response){
                    console.log(response)
                })
            }catch(e){
                console.log(e)
            }
        }      
    }
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={posterFilme} height='200px' style={{objectFit: 'cover'}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>{nomeFilme}</Card.Title>
                <Card.Text className='d-flex justify-content-between align-items-baseline'>
                    {/*<span>{anoFilme}</span> */}
                    <span>{favoritado ? 'alalallala': 'bolololo'}</span>   
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="dark">{favoritado ? 'true':'false'}</Button>
                    <Button variant={'dark'} onClick={toggleFavorite} >{favoritado || isFavorite ? <FontAwesomeIcon icon={faHeart}/>: <FontAwesomeIcon icon={farHeart} />}</Button>
                </div>             
            </Card.Body>
        </Card>
    )
}