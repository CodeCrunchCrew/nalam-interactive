import NavBar from "./components/NavBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Welcome from "./pages/Wecome";
import "./App.css";
import { useRef } from "react";
import WhoAreWe from "./pages/WhoAreWe";
import PartnerForProgress from "./pages/PartnerForProgress";
import Stories from "./pages/Stories";
import HealthImpact from "./pages/HealthImpact";
import NutritionImpact from "./pages/NutritionImpact";

function App() {
  const education = useRef(null);
  const health = useRef(null);
  const nutrition = useRef(null);

  return (
    <>
      <NavBar />
      <main>
        <Welcome />
        <WhoAreWe
          educationRef={education}
          healthRef={health}
          nutritionRef={nutrition}
        />
        <section ref={education} className="bg-light text-dark">
          <Container>
            <h2>How your contributions affect EDUCATION</h2>
            <p className="fs-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              unde tempora eos fugit error in perferendis veniam? Facere, quo
              dolores, expedita iure tempore asperiores voluptatum esse est modi
              ut aut.
            </p>
          </Container>
        </section>
        <HealthImpact ref={health}></HealthImpact>
        <NutritionImpact ref={nutrition}></NutritionImpact>
        <PartnerForProgress />
        <Stories />
      </main>
      <Button
        className="tw-bg-[#25348F] tw-text-white tw-rounded-3xl tw-px-10 tw-border-0"
        href="https://www.nalamindia.org/donate"
        variant="outline-success"
        size="lg"
        style={{ position: "fixed", right: 20, bottom: 20, zIndex: 999 }}
      >
        Donate
      </Button>
    </>
  );
}

export default App;
