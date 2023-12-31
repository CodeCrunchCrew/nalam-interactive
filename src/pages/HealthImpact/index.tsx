import IndiaMap from "../../assets/indiamap.jpg";
import { Container } from "react-bootstrap";

interface HealthImpactProps {
  healthRef: React.RefObject<HTMLElement>;
}

const HealthImpact = ({ healthRef }: HealthImpactProps) => {
  return (
    <section
      ref={healthRef}
      className="education bg-light text-dark"
      style={{
        backgroundImage: `url(${IndiaMap})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container
        style={{
          backdropFilter: "blur(1px)",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: "7%",
            right: "10px",
            width: "70%",
            backgroundColor: "#829ED5",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#5C67AB",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              alignItems: "center",
              display: "flex",
              padding: "10px",
            }}
          >
            <h3
              style={{
                fontSize: "70px",
                fontWeight: "400",
                lineHeight: "106px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              $5,780
            </h3>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <p
              style={{
                color: "white",
                margin: 0,
              }}
            >
              Donated for food, medication, etc. for the hungry and the sick.
              Because of Covid 19 many have lost their meager incomes, are
              completely cut off from the outside world.
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            bottom: "20%",
            left: "10px",
            width: "70%",
            backgroundColor: "#829ED5",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#5C67AB",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              alignItems: "center",
              display: "flex",
              padding: "10px",
            }}
          >
            <h3
              style={{
                fontSize: "70px",
                fontWeight: "400",
                lineHeight: "106px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              ~$21,000
            </h3>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <p
              style={{
                color: "white",
                margin: 0,
              }}
            >
              Initiated a project to rehabilitate 426 disabled children near an
              orphanage, in collaboration with a German partner NGO, aiming to
              enhance opportunities, elevate social status, and improve health
              conditions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HealthImpact;
