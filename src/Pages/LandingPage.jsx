import React from 'react';
import { Button, Col, Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>


    {/*Header*/}
      <Row className="my-5 align-items-center justify-content-center w-100" style={{ height: "400px" }}>
        <Col></Col>
        <Col lg={6}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
            Welcome to <span className="text-success">Media-Player</span>
          </h1>
          <p style={{color:"white",paddingTop:"10px",paddingBottom:"20px"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            accusamus dicta beatae commodi rem reprehenderit autem quaerat
            expedita ratione laudantium.
          </p>
          <Link style={{textDecoration:"none",borderRadius:"30px"}} to={'/home'} className="btn btn-info">Get Started</Link>
        </Col>
        
        <Col lg={3}>
          {/* Adjusted height of the GIF */}
          <img 
            src="https://i.gifer.com/Nt6v.gif" 
            alt="Media Player Animation" 
            style={{ height: "250px", objectFit: "cover",borderRadius:"30px" }} 
          />
        </Col>
        
        <Col></Col>
      </Row>


      {/*Card Section */}

      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
        <h1 className="text-center text-success">Features</h1>

        <div className="d-flex flex-row justify-content-evenly align-items-center w-100 flex-wrap my-5">
          
          <Card style={{ width: '17rem', margin: '15px'}} className="bg-success rounded-4 px-2">
            <Card.Img variant="top" height="200px" style={{padding:"20px 40px"}}  src="https://cdn-icons-png.flaticon.com/512/5425/5425783.png" />
            <Card.Body className='d-flex justify-content-center flex-column'>
              <Card.Title className='text-dark text-decoration-underline'>Managing Videos</Card.Title>
              <Card.Text className='text-dark'>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="dark" style={{borderRadius:"30px"}}>Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '17rem', margin: '15px' }} className="bg-success rounded-4 px-2">
            <Card.Img variant="top" height="200px" style={{padding:"25px 35px",paddingBottom:"10px"}} src="https://www.svgrepo.com/download/442466/category.svg" />
            <Card.Body className='d-flex justify-content-center flex-column'>
              <Card.Title className='text-dark text-decoration-underline'>Categorised Video</Card.Title>
              <Card.Text className='text-dark'>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="dark" style={{borderRadius:"30px"}}>Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '17rem', margin: '15px' }} className="bg-success rounded-4 px-2">
            <Card.Img variant="top" height="200px" style={{padding:"5px 20px"}} src="https://cdn-icons-png.flaticon.com/512/6680/6680955.png" />
            <Card.Body className='d-flex justify-content-center flex-column'>
              <Card.Title className='text-dark text-decoration-underline'>Custom Playlists</Card.Title>
              <Card.Text className='text-dark'>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="dark" style={{borderRadius:"30px"}}>Go somewhere</Button>
            </Card.Body>
          </Card>
          
        </div>
      </div>


      {/* Details Section */}

      <div className="container border border-2 rounded-4 d-flex align-items-center justify-content-center my-5 py-3">
        <div className="col-lg-6">
          <h4 className='text-success fw-bolder mt-4'>Simple.Powerful & Fast</h4>
          <h6 className='m-5'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, iste. Accusantium ducimus reprehenderit dolore nulla odit molestiae vero neque pariatur.</h6>
          <h6 className='m-5'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, iste. Accusantium ducimus reprehenderit dolore nulla odit molestiae vero neque pariatur.</h6>
          <h6 className='m-5'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, iste. Accusantium ducimus reprehenderit dolore nulla odit molestiae vero neque pariatur.</h6>
        </div>
        <div className="col-lg-5 ms-2">


        <iframe width="560" height="315" src="https://www.youtube.com/embed/hoNb6HuNmU0?si=Lxgu-9qF2tSUckLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
