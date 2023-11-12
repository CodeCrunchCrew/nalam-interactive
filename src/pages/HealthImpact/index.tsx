import IndiaMap from "../../assets/indiamap.jpg";
import { Container } from "react-bootstrap";

interface HealthImpactProps {
  ref: React.RefObject<HTMLElement>;
}

const HealthImpact = ({ ref }: HealthImpactProps) => {
  return (
    <section
      ref={ref}
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
                height: "10vh",
                margin: 0,
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              dicta nam sed nemo, sequi quidem illum cumque vitae, molestiae
              facere quam voluptates deserunt, ipsam sunt non tempore suscipit
              incidunt ex.
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
              ~$20,000
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
                height: "10vh",
                margin: 0,
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              dicta nam sed nemo, sequi quidem illum cumque vitae, molestiae
              facere quam voluptates deserunt, ipsam sunt non tempore suscipit
              incidunt ex.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HealthImpact;
