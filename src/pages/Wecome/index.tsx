import Button from 'react-bootstrap/Button';

const Welcome = () => {
  return (
    <section className="bg-dark">
      <div className="text-start mx-auto w-75">
        <h1 className="display-1 text-light text-opacity-50">Changing Lives...</h1>
        <h2 className="display-1 text-light">One girl at a time.</h2>
        <Button
          href="https://www.nalamindia.org/donate"
          variant="success my-4 rounded-pill"
          size="lg"
        >
          Donate
        </Button>
      </div>
    </section>
  );
};

export default Welcome;
