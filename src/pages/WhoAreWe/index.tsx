import Button from 'react-bootstrap/Button';
import placeholderImg from '../../assets/placeholder.png';

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
    <section className="bg-light text-dark tw-pt-60">
      <div className="container d-inline-flex column-gap-4">
        <div className="col">
          <div className="col text-start">
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
    </section>
  );
};

export default WhoAreWe;
