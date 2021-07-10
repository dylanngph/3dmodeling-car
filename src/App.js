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
import { CarDetail } from './component/CarDetail';
import { CarModel } from './model/Car'

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
  top: 280px;
  transition: 1.5s;
`
const Tent = styled(Box)`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 320px;
    top: 340px;
    transition: 1.5s;
    z-index: 10;
    visibility:hidden;
    opacity:0;
`
const Scrollbar = styled(Box)`
    height: 150px;
    width: 6px;
    position: absolute;
    bottom: 55px;
    left: 95px;
    background-color: hsla(0,0%,93.3%,.2);
    border-radius: 5px;
    transition:1.5s;
`
const ScrollBarItem = styled(Box)`
    width: 100%;
    height: 75px;
    background-color: hsla(0,0%,100%,.7);
    transition: 1.5s;
    border-radius: 5px;
`
function App() {
  //Biến ready kiểm tra xem Section đã scroll hết chưa và delay lại cho smooth scroll
  const [ready, setReady] = React.useState(true);


  //Biến SectionID dùng để trỏ đến các Section đang hiện hành và xác định vị trí
  const [SectionID, setSectionID] = React.useState(1);


  //Hàm handleWheel xử lí event khi cuộn chuột
  const handleWheel = React.useCallback((event) => {
    // react hooks
    if (ready) {
      setReady(false);//Tắt biến ready vì section chưa scroll hết
      if (event.deltaY < 0) {
        setSectionID(state => {
          if (state === 1) return 1;//Giới hạn SectionID không thể nhỏ hơn 1
          return state - 1;
        });
      } else {
        setSectionID(state => {
          if (state === 3) return 3; //Giới hạn SectionID không thể lớn hơn 3
          return state + 1
        });
      }
    }
  }, [ready]) // Hook useCallBack lắng nghe biến ready



  //Hàm useEffect dùng để delay tiến trình không cho cuộn quá nhanh tránh trường hợp đè chồng
  React.useEffect(() => {
    if (!ready) {
      setTimeout(() => {
        setReady(true);
      }, 1300)
    }
  }, [ready])
  console.log('SectionID', SectionID);
  console.log('ready', ready);

  return (
    <div className="body">
      <div className="screen" onWheel={handleWheel}>
        <Navbar />
        <Section1 className={
          clsx({
            show: SectionID === 1,
            after: SectionID > 1,
          })
        } >
          <Title1 />
          <Action />
        </Section1>
        <Section2 className={
          clsx({
            show: SectionID === 2,
            after2: SectionID > 2,
            before: SectionID < 2
          })
        }>
          <Title2 />
          <FloatContent />
        </Section2>
        <Section3 className={
          clsx({
            show: SectionID === 3,
            before: SectionID < 3
          })
        }>
          <CarDetail />
        </Section3>
        <Car className={clsx({
          'car-position-1': SectionID === 1,
          'car-position-2': SectionID === 2,
          'car-position-3': SectionID === 3
        })}>
          <CarModel/>
        </Car>
        <Tent className={clsx({
          'tent-position-1': SectionID === 1,
          'tent-position-2': SectionID === 2,
          'tent-position-3': SectionID === 3
        })}>
          <img src="/tent.png" alt="Tent" />
        </Tent>
        <Scrollbar className={clsx({
          'scrollbar-position-1': SectionID === 1,
          'scrollbar-position-2': SectionID === 2,
        })}>
          <ScrollBarItem className={clsx({
            'scrollbar-item-position-2': SectionID === 3
          })} />
        </Scrollbar>
      </div>
    </div>
  );
}

export default App;
