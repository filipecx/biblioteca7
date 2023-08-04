import { useState, useEffect } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { Cartao } from '../components/Cartao'
import { TituloPaginas } from '../components/TituloPaginas'
import { Sidenav } from '../components/Sidenav'

export function Home() {

    const [filmes, setFilmes] = useState([])
    const mostraFilmes = async () => {
        if(!localStorage.getItem('filmes')){
            try{
                const res = await fetch('http://localhost:3000')
                const data = await res.json()
                setFilmes(data.Search)
                localStorage.setItem('filmes', JSON.stringify(data.Search))
            }catch(error){
                console.log(error)
            }            
        }else{
            const filmesEstocados = JSON.parse(localStorage.getItem('filmes'))
            setFilmes(filmesEstocados)
        }
  }
  useEffect(() => {
    mostraFilmes()
    
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
                                        key={filme.imdbID} />
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