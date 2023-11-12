import Food from "../../assets/food.gif";
import { Container } from "react-bootstrap";

interface NutritionImpactProps {
  nutritionRef: React.RefObject<HTMLElement>;
}

const NutritionImpact = ({ nutritionRef }: NutritionImpactProps) => {
  return (
    <section
      ref={nutritionRef}
      className="education bg-light text-dark"
      style={{
        backgroundImage: `url(${Food})`,
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
            top: "7%",
            right: "10px",
            width: "70%",
            backgroundColor: "#6EB443",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#57833C",
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
              For a kitchen upgrade in 2021, as cooking for 120 girls with wood
              and damaged gas lines is dangerous, costly and pollutes air. Items
              include boiler, rice cookers, milk cooker, IDLY box, new pipes...
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
            backgroundColor: "#6EB443",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#57833C",
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
              $3,827
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

export default NutritionImpact;
