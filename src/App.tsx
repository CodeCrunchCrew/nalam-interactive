import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './App.css'
import placeholderImg from './placeholder.png';
import verticalPlaceholderImg from './placeholder-tall.png';

function App() {
  return (
    <>
      <NavBar />

      <main>

        <section className="bg-dark">
          <div className="text-start mx-auto w-75">
            <h1 className="display-1 text-light text-opacity-50">Changing Lives...</h1>
            <h2 className="display-1 text-light">One girl at a time.</h2>
            <Button variant="success my-4 rounded-pill" size="lg">Donate</Button>
          </div>
        </section>

        <section className="bg-light text-dark">
          <div className="container d-inline-flex column-gap-4">
            <div className="col">
              <div className="col text-start">
                <h1 className="display-3">Who Are We?</h1>
                <p className="fs-5">Founded in Germany in 2014, and launched in the USA in 2023, NALAM was the result of Ute Keller’s transformative visit to India, where she was moved by the pressing needs she saw. Our accomplishments today owe to the generosity of our donors and the unwavering dedication of our local partners.</p>
                <p className="fs-5">NALAM empowers vulnerable girls in South India through nutrition, security, shelter, healthcare, education, and skills training. Our volunteer-powered organization provides care and opportunities to orphaned, destitute, and half-orphan girls, aiming to uplift them out of poverty. We believe educated, empowered girls can transform their lives and break cycles of hardship.</p>
              </div>
              <div className="ratio ratio-16x9 mt-4">
                <img src={placeholderImg} className="object-fit-cover rounded-4" />
              </div>
            </div>
            <div className="col">
              <div className="ratio ratio-16x9">
                <img src={placeholderImg} className="object-fit-cover rounded-4" />
              </div>
              <h1 className="display-6">Who Are You?</h1>
              <div className="mt-4 d-flex justify-content-center">
                <div className="ratio ratio-21x9 mx-2">
                  <img src={placeholderImg} className="object-fit-cover rounded-4" />
                </div>
                <div className="ratio ratio-21x9 mx-2">
                  <img src={placeholderImg} className="object-fit-cover rounded-4" />
                </div>
                <div className="ratio ratio-21x9 mx-2">
                  <img src={placeholderImg} className="object-fit-cover rounded-4" />
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <section className="bg-light text-dark">
          <Container className="w-75">
            <Row className="mb-4">
              <Col className="text-start">
                <h1 className="display-4">Partner for Progress with Nalam</h1>
                <p className="fs-4">Join our team and discover strategic strategies to uplift vulnerable girls in South India.</p>
                <Button variant="primary my-4 rounded-pill" size="lg">Contact</Button>
              </Col>
              <Col>
                <div className="ratio ratio-4x3">
                  <img src={placeholderImg} className="object-fit-cover rounded-4" />
                </div>
              </Col>
            </Row>
            <Row className="column-gap-3">
              <Col className="d-flex justify-content-center align-items-center">
                <p className="fs-4">Our Corporate Partners</p>
              </Col>
              <Col>
                <div className="ratio ratio-21x9">
                  <img src={placeholderImg} className="object-fit-cover rounded" />
                </div>
              </Col>
              <Col>
                <div className="ratio ratio-21x9">
                  <img src={placeholderImg} className="object-fit-cover rounded" />
                </div>
              </Col>
              <Col>
                <div className="ratio ratio-21x9">
                  <img src={placeholderImg} className="object-fit-cover rounded" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="bg-light text-dark">
          <Col>
            <h1 className="display-5 mb-4">A Glimpse into the Lives We’ve Changed</h1>
            <Row className="d-flex justify-content-center mx-4">
              <Col className="col-4">
                <img src={verticalPlaceholderImg} className="rounded w-75" />
              </Col>
              <Col className="col-4">
                <img src={verticalPlaceholderImg} className="rounded w-75" />
              </Col>
              <Col className="col-4">
                <img src={verticalPlaceholderImg} className="rounded w-75" />
              </Col>
            </Row>
          </Col>
        </section>

      </main>

      <Button variant="outline-success" size="lg" style={{position: 'fixed', right: 10, bottom: 10, zIndex: 999}}>Donate</Button>
    </>
  );
}

export default App;
