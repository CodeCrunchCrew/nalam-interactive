import Button from 'react-bootstrap/Button';
import whoAreWeRightImg from '../../assets/who-are-we-right.png';
import whoAreWeLeftImg from '../../assets/who-are-we-left.png';

interface WhoAreWeProps {
  educationRef: React.RefObject<HTMLElement>;
  healthRef: React.RefObject<HTMLElement>;
  nutritionRef: React.RefObject<HTMLElement>;
}

const WhoAreWe = ({ educationRef, healthRef, nutritionRef }: WhoAreWeProps) => {
  const handleClick = (location: React.RefObject<HTMLElement>) => {
    location.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="text-dark tw-bg-[#829ED5]">
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
            <div className="ratio ratio-4x3">
              <img src={whoAreWeRightImg} className="object-fit-cover rounded-4" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <div className="ratio ratio-16x9 mt-4">
              <img src={whoAreWeLeftImg} className="object-fit-cover rounded-4" />
            </div>
          </div>
          <div className="mt-4 justify-content-center col-6">
            <h1 className="fs-4 tw-my-2">
              Who do <b>YOU</b> want to be in this story?
            </h1>
            <div className="tw-flex">
              <div className="ratio ratio-21x9 mx-2">
                <Button
                  variant="warning"
                  className="play-buttons rounded-4 d-flex justify-content-center align-items-center"
                  onClick={() => handleClick(educationRef)}
                >
                  Play a part in EDUCATION
                </Button>
              </div>
              <div className="ratio ratio-21x9 mx-2">
                <Button
                  variant="warning"
                  className="play-buttons rounded-4 d-flex justify-content-center align-items-center"
                  onClick={() => handleClick(healthRef)}
                >
                  Play a part in HEALTH
                </Button>
              </div>
              <div className="ratio ratio-21x9 mx-2">
                <Button
                  variant="warning"
                  className="play-buttons rounded-4 d-flex justify-content-center align-items-center"
                  onClick={() => handleClick(nutritionRef)}
                >
                  Play a part in NUTRITION
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
