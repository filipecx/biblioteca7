import { useState, useEffect, createContext } from 'react'
import Axios from 'axios'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { Cartao } from '../components/Cartao'
import { TituloPaginas } from '../components/TituloPaginas'
import { Sidenav } from '../components/Sidenav'

export const ItemContext = createContext('Default')

export function Home() {
    const [favoritos, listaFavoritos] = useState([])
    const [filmes, setFilmes] = useState([])

    const mostraFilmes = async () => {
        try{
            const res = await fetch('http://localhost:3000')
            const data = await res.json()
            setFilmes(data.Search)
        }catch(error){
            console.log(error)
        }            
    {/*    if(!localStorage.getItem('filmes')){
            try{
                const res = await fetch('http://localhost:3000')
                const data = await res.json()
                setFilmes(data.Search)
                localStorage.setItem('filmes', JSON.stringify(data.Search))
            }catch(error){
                console.log(error)
            }            
        }else{
            const filmesEstocados = await JSON.parse(localStorage.getItem('filmes'))
            setFilmes(filmesEstocados)
        }
    */}
    } 
    const getFav = async () => {//pega do banco de dados os ids cadastrados
        await Axios.get(`http://localhost:3000/filmes`)
        .then((res) => {
            const dados = res.data
            dados.map((item) => {
                listaFavoritos(prevFavoritos => [...prevFavoritos, item.idFilme])
            })
                            
        })
    }
  useEffect(() => {
    mostraFilmes()
    getFav()
  }, [])
  
    return(
       
        <Container >
            <Row>
                <Col lg={3} className='mt-5'>
                    <Sidenav />
                </Col>
                <Col>          
                    <Row className='my-4'>
                        <Col>
                            <TituloPaginas texto={'Filmes populares'}  /> 
                        </Col>            
                    </Row>     
                    <Row md={2} xs={1} lg={3} className="g-2"> 
                            {
                            filmes.map((filme) => {
                                return(
                                    <Col key={filme.imdbID + '0,3'}>
                                        <Cartao 
                                            nomeFilme={filme.Title}
                                            anoFilme={filme.Year} 
                                            idFilme={filme.imdbID}
                                            tipoFilme={filme.Type}
                                            posterFilme={filme.Poster}
                                            key={filme.imdbID}
                                            favoritado={favoritos.includes(filme.imdbID) ? true : false} />
                                    </Col>
                                )             
                            })
                            }
                    </Row>
                </Col>
           </Row>          
        </Container>
        
    )
}