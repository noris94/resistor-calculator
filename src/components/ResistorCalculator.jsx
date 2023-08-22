import React, { useEffect, useState } from 'react';
import ColorSelector from './ColorSelector';
import { calculateOhms, getBandColors } from '../services/ApiService';
import { ButtonCustom } from './ButtonCustom';
import { ResultValue } from './ResultValue';

const ResistorCalculator = () => {
  const [bandAColor, setBandAColor] = useState('black');
  const [bandBColor, setBandBColor] = useState('black');
  const [bandCColor, setBandCColor] = useState('black');
  const [bandDColor, setBandDColor] = useState('brown');
  const [ohmValue, setOhmValue] = useState(0);

  const [bandColors, setBandColors] = useState();

  const fillBandColors = async()=>{
    const bandColors = await getBandColors();
    setBandColors(bandColors);
  }

  const calculateResistance = async() => {
    const resp = await calculateOhms({
      bandAColor,bandBColor,bandCColor,bandDColor
    });
    setOhmValue(resp.ohms)
  };

  useEffect(()=>{
    fillBandColors();
  },[])

  return (
    <div className='p-5 text-center'>
        <h2 className='font-black text-5xl'>Band Resistor Calculator</h2>
        <ColorSelector
            label="Band A Color"
            colors={bandColors?.firstTwoDigitsValues}
            value={bandAColor}
            onChange={(e) => setBandAColor(e.target.value)}
        />

        <ColorSelector
            label="Band B Color"
            colors={bandColors?.firstTwoDigitsValues}
            value={bandBColor}
            onChange={(e) => setBandBColor(e.target.value)}
        />

        <ColorSelector
            label="Band C Color"
            colors={bandColors?.multiplierPowers}
            value={bandCColor}
            onChange={(e) => setBandCColor(e.target.value)}
        />

        <ColorSelector
            label="Band D Color"
            colors={bandColors?.tolerances}
            value={bandDColor}
            onChange={(e) => setBandDColor(e.target.value)}
        />
        <ButtonCustom onClick={calculateResistance} label={'Calculate'} className={'rounded border text-center font-bold p-3 mt-10 bg-white'} name='btnCalculate'/>
      
        <ResultValue ohmValue={ohmValue} />
    </div>
  );
};

export default ResistorCalculator;
