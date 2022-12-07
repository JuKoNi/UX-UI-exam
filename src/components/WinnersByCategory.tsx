import React, { useEffect } from 'react';
import { count, winnersByCategoryData } from '../data/awards';
import { Pie, Bar, Line } from 'react-chartjs-2';
import './WinnersByCategory.css'
import anime from 'animejs';

type Props = {
  chosenAni: string;
}

const WinnersByCategory = (props: Props) => {

  useEffect(() => {
    if (props.chosenAni === 'extreme') {
      anime({
        targets: '.winByCat-chart',
        keyframes: [
          { rotate: 180, translateY: '0' },
          { translateX: '100%', rotate: 360},
          { translateX: '-0' },
          // { rotateY: -360, translateY: '0' },
          { translateX: '0' },
        ],
        easing: 'easeInOutElastic',
        duration: 4000
     })
    }
    if (props.chosenAni === 'gentle') {
      anime({
        targets: '.winByCat-wrapper',
        scale: 1.1,
        // opacity: [1, 0.7],
        easing: 'easeInOutQuad',
        direction: 'alternate',
      });
  }
  
  }, [])

  
  return (
    <section className="chart-wrapper winByCat-wrapper">
      <div className='winByCat-chart'>WinnersByCategory NR3 (CIRKEL)
        <Pie data={winnersByCategoryData} />
      </div>

    </section>
  )
}

export default WinnersByCategory