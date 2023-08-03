import { useState, useEffect } from 'react'
import { Cartao } from '../components/Cartao'
import { Row, Container, Col } from 'react-bootstrap'
import { TituloPaginas } from '../components/TituloPaginas'


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
            <Row className='my-4'>
                <Col>
                    <TituloPaginas texto={'Filmes populares'}  /> 
                </Col>            
            </Row>     
            <Row md={2} xs={1} lg={4} className="g-3"> 
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
           </Container>
        
    )
}