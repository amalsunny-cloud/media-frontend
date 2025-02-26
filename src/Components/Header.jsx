import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className='bg-primary'>
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand href="" className='text-light fw-bold'>
              <img src="https://w7.pngwing.com/pngs/15/44/png-transparent-windows-media-player-computer-icons-play-button-miscellaneous-orange-windows-media.png" width="28" height="28" alt="" className='d-inline-block align-top' />{ ' '}
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
