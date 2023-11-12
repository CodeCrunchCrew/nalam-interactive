import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import './App.css';

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main ref={ref}>
          <h1 className="my-0 mx-auto">Main</h1>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
