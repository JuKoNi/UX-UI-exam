import { useEffect } from 'react';
import './AveragePrizeSum.css'
import { Line } from 'react-chartjs-2';
import { PrizeData } from '../data/awards'
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
        duration: 4000
     })
    }
  if (props.chosenAni === 'gentle') {
    anime({
      targets: '.sum-wrapper',
      scale: 1.1,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    });
}
}, [])
    
  return (
    <section className='chart-wrapper sum-wrapper'>
      <div className="sum-chart">
          <Line data={PrizeData} />
      </div>

    </section>
  )
}

export default AveragePrizeSum