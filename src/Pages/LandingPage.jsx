import React from 'react';
import { Button, Col, Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>


    {/*Header*/}
      <Row className="my-5 align-items-center justify-content-center w-100" style={{ height: "400px" }}>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
            Welcome to <span className="text-warning">Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            accusamus dicta beatae commodi rem reprehenderit autem quaerat
            expedita ratione laudantium.
          </p>
          <Link style={{textDecoration:"none"}} to={'/home'} className="btn btn-info">Get Started</Link>
        </Col>
        
        <Col lg={3}>
          {/* Adjusted height of the GIF */}
          <img 
            src="https://i.gifer.com/Nt6v.gif" 
            alt="Media Player Animation" 
            style={{ height: "250px", objectFit: "cover" }} 
          />
        </Col>
        
        <Col></Col>
      </Row>


      {/*Card Section */}

      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
        <h2 className="text-center text-warning">Features</h2>

        <div className="d-flex flex-row justify-content-center align-items-center w-100 flex-wrap my-5">
          
          <Card style={{ width: '18rem', margin: '15px' }} className="bg-primary">
            <Card.Img variant="top" height="300px" src="https://cdn-icons-png.flaticon.com/512/5425/5425783.png" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin: '15px' }} className="bg-primary">
            <Card.Img variant="top" height="300px" src="https://icon-library.com/images/categorize-icon/categorize-icon-0.jpg" />
            <Card.Body>
              <Card.Title>Categorised Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin: '15px' }} className="bg-primary">
            <Card.Img variant="top" height="300px" src="https://cdn-icons-png.flaticon.com/512/6680/6680955.png" />
            <Card.Body>
              <Card.Title>Custom Playlists</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
          
        </div>
      </div>


      {/* Details Section */}

      <div className="container border border-2 d-flex align-items-center justify-content-center mt-5 p-3">
        <div className="col-lg-5">
          <h4 className='text-warning fw-bolder'>Simple.Powerful & Fast</h4>
          <h6 className='m-5'><span className='text-warning fw-bolder'>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, iste. Accusantium ducimus reprehenderit dolore nulla odit molestiae vero neque pariatur.</h6>
          <h6 className='m-5'><span className='text-warning fw-bolder'>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, iste. Accusantium ducimus reprehenderit dolore nulla odit molestiae vero neque pariatur.</h6>
          <h6 className='m-5'><span className='text-warning fw-bolder'>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, iste. Accusantium ducimus reprehenderit dolore nulla odit molestiae vero neque pariatur.</h6>
        </div>
        <div className="col-lg-5 ms-2">


        <iframe width="560" height="315" src="https://www.youtube.com/embed/3LOUcK5A65I?si=BzUI33q3TRN-no2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
