import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import placeholderImg from '../../assets/placeholder.png';

const PartnerForProgress = () => {
  return (
    <section className="bg-light text-dark">
      <Container className="w-75">
        <Row className="mb-4">
          <Col className="text-start">
            <h1 className="display-4">Partner for Progress with Nalam</h1>
            <p className="fs-4">
              Join our team and discover strategic strategies to uplift vulnerable girls in South
              India.
            </p>
            <Button variant="primary my-4 rounded-pill" size="lg">
              Contact
            </Button>
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
  );
};

export default PartnerForProgress;
