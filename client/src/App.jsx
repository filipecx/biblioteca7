import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Container, Col, Row } from 'react-bootstrap'

import { Sidenav } from '../components/Sidenav'
import { Home } from '../pages/Home'
import { Favoritos } from '../pages/Favoritos'



function App() {

 
  return (
    <Container>
      <Row>       
          <Col lg={3} className='mt-5'>
            <Sidenav />
          </Col>
          <Col>
            <Routes>
            <Route path={'/'} exact element={<Home />}/>
            <Route path={'/favoritos'}  element={<Favoritos />}/>
          </Routes>
          </Col>       
      </Row>
      
    </Container>
  )
}

export default App
