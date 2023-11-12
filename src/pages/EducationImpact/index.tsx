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
              4 classrooms are currently being built. The purchase of the
              following items is in progress: Projectors, school desks,
              blackboards.
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
              Enhancing the learning experience, $2K was raised to introduce
              English and Self-Defense classes.
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
              For 11 girls entering 12th grade, a total of $14.5K was raised to
              secure their continued education.
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
              Supported 13 girls pursuing vocational training after 10th grade
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationImpact;
