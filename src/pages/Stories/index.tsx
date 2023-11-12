import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import verticalPlaceholderImg from '../../assets/placeholder-tall.png';

const Stories = () => {
  return (
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
  );
};

export default Stories;
