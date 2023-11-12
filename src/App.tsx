import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <>
      <NavBar />
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main ref={ref}>
          <h1 className="my-0 mx-auto">Main</h1>
        </main>
      </LocomotiveScrollProvider>
      <Button variant="outline-success" size="lg" style={{position: 'fixed', right: 10, bottom: 10, zIndex: 999}}>Donate</Button>
    </>
  );
}

export default App;
