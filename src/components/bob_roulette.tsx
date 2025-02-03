import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import BOB_LIST from '../BOB_LIST';

const data = BOB_LIST.gong_ward.map(item => ({ option: item }));

const backgroundColors = ['#90eoef', '#caf0f8', '#fdeff4', '#c0d8c0'];
const textColors = ['#2c2c2c'];
const outerBorderColor = '#ddd';
const outerBorderWidth = 1;
const innerBorderColor = '#ddd';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#ddd';
const radiusLineWidth = 1;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 12;
const fontStyle = 'normal';
const textDistance = 60;
const spinDuration = 0.3;

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className={'spin-button'} onClick={handleSpinClick} style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#2c2c2c',
          backgroundColor: '#caf0f8',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          margin: '20px auto',
          display: 'block'
        }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#90e0ef'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#caf0f8'}>
          돌리기
        </button>
      </header>
    </div>
  );
};