import NavBar from "./components/NavBar";
import Button from "react-bootstrap/Button";
import Welcome from "./pages/Wecome";
import "./App.css";
import { useRef } from "react";
import WhoAreWe from "./pages/WhoAreWe";
import PartnerForProgress from "./pages/PartnerForProgress";
import Stories from "./pages/Stories";
import HealthImpact from "./pages/HealthImpact";
import NutritionImpact from "./pages/NutritionImpact";
import EducationImpact from "./pages/EducationImpact";

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
        <EducationImpact ref={education}></EducationImpact>
        <HealthImpact ref={health}></HealthImpact>
        <NutritionImpact ref={nutrition}></NutritionImpact>
        <PartnerForProgress />
        <Stories />
      </main>
      <Button
        className="tw-bg-[#25348F] hover:tw-bg-indigo-600 tw-text-white tw-rounded-3xl tw-px-10 tw-border-0"
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
