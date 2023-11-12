import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import partnerPageImg from '../../assets/partner-page-img.png';
import birdImg from '../../assets/bird.png';
import logoGoogle from '../../assets/corporate-logos/logo-google.png';
import logoSalesforce from '../../assets/corporate-logos/logo-salesforce.png';
import logoIbm from '../../assets/corporate-logos/logo-ibm.png';

const PartnerForProgress = () => {
  return (
    <section className="bg-light text-dark">
      <Container className="w-75">
        <Row className="mb-4 align-items-center">
          <Col className="text-start">
            <h1 className="display-4">Partner for Progress with Nalam</h1>
            <p className="fs-4">
              Join our team and discover strategic strategies to uplift vulnerable girls in South
              India.
            </p>
            <Button
              variant="primary my-4 rounded-pill"
              className="tw-bg-[#829ED5] tw-border-0"
              size="lg"
            >
              Contact
            </Button>
            <div>
              <img width="350" src={birdImg} className="object-fit-cover rounded-4" />
            </div>
          </Col>
          <Col>
            <div>
              <img width="500" src={partnerPageImg} className="object-fit-cover rounded-4" />
            </div>
          </Col>
        </Row>
        <Row className="column-gap-3 align-items-center">
          <Col className="d-flex justify-content-center align-items-center">
            <p className="fs-4">Our Corporate Partners</p>
          </Col>
          <Col>
            <div>
              <img width="150" src={logoGoogle} className="object-fit-cover rounded" />
            </div>
          </Col>
          <Col>
            <div>
              <img width="150" src={logoSalesforce} className="object-fit-cover rounded" />
            </div>
          </Col>
          <Col>
            <div>
              <img width="150" src={logoIbm} className="object-fit-cover rounded" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnerForProgress;
