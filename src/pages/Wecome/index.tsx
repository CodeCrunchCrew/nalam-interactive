import Button from 'react-bootstrap/Button';
import WelcomeBgImg from '../../assets/welcome-background.png';

const Welcome = () => {
  return (
    <section
      className="bg-dark tw-relative"
      style={{
        backgroundImage: `url(${WelcomeBgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div className="text-start mx-auto tw-absolute tw-bottom-0 w-75">
        <h1 className="display-1 text-light text-opacity-80">Changing Lives...</h1>
        <h2 className="display-1 text-light">One girl at a time.</h2>
        <Button
          href="https://www.nalamindia.org/donate"
          variant="success my-4 rounded-pill"
          className="tw-bg-blue-900 tw-border-0 tw-px-6"
          size="lg"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Welcome;
