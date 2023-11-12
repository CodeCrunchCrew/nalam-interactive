import Button from 'react-bootstrap/Button';
import whoAreWeRightImg from '../../assets/who-are-we-right.png';
import whoAreWeLeftImg from '../../assets/who-are-we-left.png';
import educationIcon from '../../assets/education-icon.png';
import healthIcon from '../../assets/health-icon.png';
import nutritionIcon from '../../assets/nutrition-icon.png';

interface WhoAreWeProps {
  educationRef: React.RefObject<HTMLElement>;
  healthRef: React.RefObject<HTMLElement>;
  nutritionRef: React.RefObject<HTMLElement>;
  selfRef?: React.RefObject<HTMLElement>;
}

const WhoAreWe = ({ educationRef, healthRef, nutritionRef, selfRef }: WhoAreWeProps) => {
  const handleClick = (location: React.RefObject<HTMLElement>) => {
    location.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={selfRef} className="text-dark tw-bg-[#829ED5] tw-h-fit tw-py-8" id="#who-are-we">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 text-start">
            <h1 className="display-3">Who Are We?</h1>
            <p className="fs-5">
              Founded in Germany in 2014, and launched in the USA in 2023, NALAM was the result of
              Ute Keller’s transformative visit to India, where she was moved by the pressing needs
              she saw. Our accomplishments today owe to the generosity of our donors and the
              unwavering dedication of our local partners.
            </p>
            <p className="fs-5">
              NALAM empowers vulnerable girls in South India through nutrition, security, shelter,
              healthcare, education, and skills training. Our volunteer-powered organization
              provides care and opportunities to orphaned, destitute, and half-orphan girls, aiming
              to uplift them out of poverty. We believe educated, empowered girls can transform
              their lives and break cycles of hardship.
            </p>
          </div>
          <div className="col-6 justify-content-center">
            <div className="ratio ratio-4x3" style={{ borderRadius: '40px' }}>
              <img src={whoAreWeRightImg} className="object-fit-cover rounded-4" style={{ borderRadius: '40px' }} />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <div className="ratio ratio-16x9 mt-4" style={{ borderRadius: '40px' }} >
              <img src={whoAreWeLeftImg} className="object-fit-cover " style={{ borderRadius: '40px' }} />
            </div>
          </div>
          <div className="mt-4 justify-content-center col-6">
            <h1 className="fs-4 my-2">
              Who do <b>YOU</b> want to be in this story?
            </h1>
            <div className="tw-flex">
              <div className="ratio ratio-1x1 mx-2 tw-my-4">
                <Button
                  variant="warning"
                  className="play-buttons rounded-4 d-flex flex-column justify-content-center align-items-center"
                  onClick={() => handleClick(educationRef)}
                >
                  <img src={educationIcon} className="object-fit-cover rounded-4" />
                  <b className="tw-uppercase tw-text-[#A84439]">Education</b>
                </Button>
              </div>
              <div className="ratio ratio-1x1 mx-2 tw-my-4">
                <Button
                  variant="warning"
                  className="play-buttons rounded-4 d-flex flex-column justify-content-center align-items-center"
                  onClick={() => handleClick(healthRef)}
                >
                  <img src={healthIcon} className="object-fit-cover p-1 rounded-4" />
                  <b className="tw-uppercase tw-text-[#A84439]">Health Wellness</b>
                </Button>
              </div>
              <div className="ratio ratio-1x1 mx-2 tw-my-4">
                <Button
                  variant="warning"
                  className="play-buttons rounded-4 d-flex flex-column justify-content-center align-items-center"
                  onClick={() => handleClick(nutritionRef)}
                >
                  <img src={nutritionIcon} className="object-fit-cover p-3 rounded-4" />
                  <b className="tw-uppercase tw-text-[#A84439]">Nutrition</b>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
