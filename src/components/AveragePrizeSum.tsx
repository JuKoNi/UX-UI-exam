import React, { useEffect } from 'react';
import './AveragePrizeSum.css'
import { Pie, Bar, Line } from 'react-chartjs-2';
import { PrizeData, AdjustedPrizeData } from '../data/awards'
import anime from 'animejs';

type Props = {
  chosenAni: string;
}

const AveragePrizeSum = (props: Props) => {

  useEffect(() => {
    if (props.chosenAni === 'extreme') {
      anime({
        targets: '.sum-chart',
        keyframes: [
          {translateX: '-100vw'},
          {rotate: '-180deg'},
          {translateX: '0vw'},
          {rotate: '360deg'},
        ],
        easing: 'easeInOutElastic',
        duration: 2000
     })
    }
  if (props.chosenAni === 'gentle') {
    anime({
      targets: '.sum-chart',
      scale: 1.1,
      // opacity: [1, 0.7],
      easing: 'easeInOutQuad',
      direction: 'alternate',
    });
}
}, [])
    
  return (
    <section className='chart-wrapper sum-wrapper'>
      <div className="sum-chart">AveragePrizeSum NR1 (LINJE)
          <Line data={PrizeData} />
          {/* <Line data={AdjustedPrizeData} /> */}
      </div>

    </section>
  )
}

export default AveragePrizeSum