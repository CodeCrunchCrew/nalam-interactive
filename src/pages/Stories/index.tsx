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
              <div className="image-container mx-4" style={{position: 'relative', borderRadius: '40px'}}  data-bs-toggle="modal" data-bs-target="#girlInfoModal">
                <img src={girl0} className="" style={{ borderRadius: '40px', boxShadow: '20px 20px 0px #25348F' }} />
                <div className="overlay-text h-100 w-100" style={{ borderRadius: '40px', background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="h-100 align-content-center text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <h1 className="m-3">Name, since 2023</h1>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-4">
              <div className="image-container mx-4" style={{position: 'relative', borderRadius: '40px',}}  data-bs-toggle="modal" data-bs-target="#girlInfoModal">
                <img src={girl1} className="" style={{ boxShadow: '20px 20px 0px #25348F', borderRadius: '40px', }} />
                <div className="overlay-text h-100 w-100" style={{ borderRadius: '40px', background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="h-100 align-content-center text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <h1 className="m-3">Rekha, since 2015</h1>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-4">
              <div className="image-container mx-4" style={{position: 'relative', borderRadius: '40px' }}  data-bs-toggle="modal" data-bs-target="#girlInfoModal">
                <img src={girl2} className="" style={{ boxShadow: '20px 20px 0px #25348F', borderRadius: '40px' }} />
                <div className="overlay-text h-100 w-100" style={{ borderRadius: '40px', background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="h-100 align-content-center text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <h1 className="m-3">Name, since 2023</h1>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      
      <div className="modal fade" id="girlInfoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content" style={{ borderRadius: '42px', background: "#25348F" }}>
            <div className="w-100 p-0 m-0 d-flex">
              <div>
                <img src={girl1} className="" style={{ borderRadius: "0px", boxShadow: '20px 20px 0px #25348F' }} />
              </div>
              <div className="d-flex flex-column m-4 w-100">
                <h1 className="fs-3 p-3 rounded-pill text-light" style={{ background: "#829ED5" }}>Rekha</h1>
                <div className="align-self-end align-self-baseline p-3">
                  <p className="fs-5 text-light">
                    <b>Age:</b> 9
                  </p>
                  <p className="fs-5 text-light">
                    <b>Her Story:</b> Rekha is a half-orphan living at the orphanage since the tragic loss of her grandmother. With her father having passed away and her mother remarried, Rekha faced the harsh reality of neglect and starvation. A village elder intervened at this crucial point, leading her to the safety of our orphanage. Admitted here, Rekha encountered a nurturing environment that offered her opportunities she never dreamt possible.Your contributions play a significant role in transforming lives like Rekha's, providing hope and paving the path for a brighter future.
                  </p>
                  <div className="d-flex justify-content-end align-content-end">
                    <button type="button" className="btn btn-lg btn-outline-light mt-auto ml-auto align-self-end rounded-pill" data-bs-dismiss="modal" aria-label="Close">Back</button> 
                  </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Stories;
