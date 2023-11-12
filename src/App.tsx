import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';
import Welcome from './pages/Wecome';
import './App.css';
import { useRef } from 'react';
import WhoAreWe from './pages/WhoAreWe';
import PartnerForProgress from './pages/PartnerForProgress';
import Stories from './pages/Stories';
import HealthImpact from './pages/HealthImpact';
import NutritionImpact from './pages/NutritionImpact';
import EducationImpact from './pages/EducationImpact';

function App() {
  const education = useRef(null);
  const health = useRef(null);
  const nutrition = useRef(null);
  const whoAreWe = useRef(null);

  return (
    <>
      <NavBar />
      <main>
        <Welcome />
        <WhoAreWe
          selfRef={whoAreWe}
          educationRef={education}
          healthRef={health}
          nutritionRef={nutrition}
        />
        <EducationImpact educationRef={education}></EducationImpact>
        <HealthImpact healthRef={health}></HealthImpact>
        <NutritionImpact nutritionRef={nutrition}></NutritionImpact>
        <PartnerForProgress />
        <Stories />
      </main>
      <Button
        className=" tw-bg-transparent tw-text-black tw-border tw-border-1 hover:tw-bg-indigo-60 tw-rounded-full tw-px-4 tw-py-2 tw-text-lg"
        size="lg"
        onClick={() => {
          whoAreWe.current?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{ position: 'fixed', left: 20, bottom: 20, zIndex: 999 }}
      >
        ^
      </Button>
      <Button
        className="tw-bg-[#25348F] hover:tw-bg-indigo-600 tw-text-white tw-rounded-3xl tw-px-10 tw-border-0"
        href="https://www.nalamindia.org/donate"
        variant="outline-success"
        size="lg"
        style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 999 }}
      >
        Donate
      </Button>
    </>
  );
}

export default App;
