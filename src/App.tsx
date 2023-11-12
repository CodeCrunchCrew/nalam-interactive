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
      <main data-scroll-container ref={ref}>
        <section className="intro" data-scroll-section>
          <h1>This is the Introduction section</h1>
        </section>
        <section className="contents" data-scroll-section>
          <h1>I Love React</h1>
        </section>
        <section className="footer" data-scroll-section>
          <h1>Let's end the application with this Footer</h1>
        </section>
      </main>
    </LocomotiveScrollProvider>
      <Button variant="outline-success" size="lg" style={{position: 'fixed', right: 10, bottom: 10, zIndex: 999}}>Donate</Button>
    </>
  );
}

export default App;
