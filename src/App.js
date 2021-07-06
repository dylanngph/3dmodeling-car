import './App.css';
import { Box } from '@material-ui/core'
import styled from '@emotion/styled';
import clsx from 'clsx';
import React from 'react';
import { Title1 } from './component/Title1';
import { Action } from './component/Action';
import { Navbar } from './component/Navbar';
import { Title2 } from './component/Title2';
import { FloatContent } from './component/FloatContent';

const Section1 = styled(Box)`
  height:100%;
  width:100%;
  position:absolute;
`
const Section2 = styled(Box)`
  height:100%;
  width:100%;
  position:absolute;
`
const Section3 = styled(Box)`
  height:100%;
  width:100%;
  position:absolute;
`
const Car = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 300px;
  transition: 1.5s;
  img {
    transition: 1.5s;
    width: 700px;
  }
`
function App() {
  const [ready, setReady] = React.useState(true);
  const [step, setStep] = React.useState(1);
  const handleWheel = React.useCallback((event) => {
    // react hooks
    if (ready) {
      setReady(false);
      if (event.deltaY < 0) {
        setStep(state => {
          if (state === 1) return 1;
          return state - 1;
        });
      } else {
        setStep(state => {
          if (state === 3) return 3;
          return state + 1
        });
      }
    }
  }, [ready])

  React.useEffect(() => {
    if (!ready) {
      setTimeout(() => {
        setReady(true);
      }, 500)
    }
  }, [ready])
  console.log('step', step);
  console.log('ready', ready);
  return (
    <div className="body">
      <div className="screen" onWheel={handleWheel}>
        <Navbar />
        <Section1 className={
          clsx({
            show: step === 1,
            after: step > 1,
          })
        } >
          <Title1 />
          <Action />
        </Section1>
        <Section2 className={
          clsx({
            show: step === 2,
            after2: step > 2,
            before: step < 2
          })
        }>
          <Title2 />
          <FloatContent />
        </Section2>
        <Section3 className={
          clsx({
            show: step === 3,
            before: step < 3
          })
        } />
        <Car>
          <img src="/gt-img.png" alt="CarImage" />
        </Car>
      </div>
    </div>
  );
}

export default App;
