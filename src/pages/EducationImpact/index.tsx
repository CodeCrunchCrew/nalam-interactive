import { Container } from "react-bootstrap";
import Education from "../../assets/education.gif";
import "./EducationImpact.css";

interface EducationImpactProps {
  educationRef: React.RefObject<HTMLElement>;
}

const EducationImpact = ({ educationRef }: EducationImpactProps) => {
  return (
    <section
      ref={educationRef}
      className="education bg-light text-dark"
      style={{
        backgroundImage: `url(${Education})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: "10%",
            left: "10px",
            width: "60%",
            backgroundColor: "#FFA149",
            borderRadius: "20px",
          }}
        >
          <div className="education-impact">
            <h3
              style={{
                fontSize: "70px",
                fontWeight: "400",
                lineHeight: "106px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              $51,980
            </h3>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <p className="education-text">
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
            top: "30%",
            left: "10px",
            width: "60%",
            backgroundColor: "#FFA149",
            borderRadius: "20px",
          }}
        >
          <div className="education-impact">
            <h3
              style={{
                fontSize: "70px",
                fontWeight: "400",
                lineHeight: "106px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              $2,543
            </h3>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <p className="education-text">
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
            top: "50%",
            left: "10px",
            width: "60%",
            backgroundColor: "#FFA149",
            borderRadius: "20px",
          }}
        >
          <div className="education-impact">
            <h3
              style={{
                fontSize: "70px",
                fontWeight: "400",
                lineHeight: "106px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              $14,542
            </h3>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <p className="education-text">
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
            top: "70%",
            left: "10px",
            width: "60%",
            backgroundColor: "#FFA149",
            borderRadius: "20px",
          }}
        >
          <div className="education-impact">
            <h3
              style={{
                fontSize: "70px",
                fontWeight: "400",
                lineHeight: "106px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              $20,000
            </h3>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <p className="education-text">
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

export default EducationImpact;
