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
          {transformOrigin: '50%, 50%'},
          {rotate: '40deg'},
          {rotate: '-40deg'},
          {rotate: '20deg'},
          {rotate: '-20deg'},
          {rotate: '10deg'},
          {rotate: '-10deg'},
          {rotate: '5deg'},
          {rotate: '-5deg'},
          {rotate: '0deg'},

        ],
        easing: 'spring(1, 80, 10, 0)',
        // easing: 'easeInOutElastic',
        duration: 4000
     })
    }
  if (props.chosenAni === 'gentle') {
    anime({
      targets: '.sum-wrapper',
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