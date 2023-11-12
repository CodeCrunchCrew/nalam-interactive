import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import girl0 from '../../assets/girl-0.png';
import girl1 from '../../assets/girl-1.png';
import girl2 from '../../assets/girl-2.png';

const Stories = () => {
  return (
    <section className="col bg-light text-dark mb-0 pb-0">
      <Col>
        <h1 className="display-5 mb-4">A Glimpse into the Lives We’ve Changed</h1>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ background: "#C9CCE3",  height: "90vh"}}>
          <Row className="d-flex h-100 justify-content-center align-items-center py-4">
            <Col className="col-4">
              <div className="image-container mx-4 rounded-5" style={{position: 'relative'}}>
                <img src={girl0} className="rounded-5" style={{ boxShadow: '20px 20px 0px #25348F' }} />
                <div className="overlay-text rounded-5 h-100 w-100" style={{ background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="h-100" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <h1 className="">Name, since 2020</h1>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-4">
              <div className="image-container mx-4 rounded-5" style={{position: 'relative'}}>
                <img src={girl1} className="rounded-5" style={{ boxShadow: '20px 20px 0px #25348F' }} />
                <div className="overlay-text rounded-5 h-100 w-100" style={{ background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="h-100" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <h1 className="">Name, since 2020</h1>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-4">
              <div className="image-container mx-4 rounded-5" style={{position: 'relative'}}>
                <img src={girl2} className="rounded-5" style={{ boxShadow: '20px 20px 0px #25348F' }} />
                <div className="overlay-text rounded-5 h-100 w-100" style={{ background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="h-100" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <h1 className="">Name, since 2020</h1>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </section>
  );
};

export default Stories;
