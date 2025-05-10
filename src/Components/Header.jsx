import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import playImage from '../assets/play.png'

function Header() {
  return (
    <>
      <Navbar className='bg-white'>
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand href="" className='text-primary fw-bold'>
              <img src={playImage} width="28" height="28" alt="" className='d-inline-block align-top' />{ ' '}
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
