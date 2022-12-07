import React, { useEffect } from 'react';
import './GenderChart.css'
import { genderData } from '../data/winners.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import anime, { AnimeInstance } from 'animejs';



type Props = {
  chosenAni: string;
}

const GenderChart = (props: Props) => {  
  
  useEffect(() => {
    if (props.chosenAni === 'extreme') {
      anime({
        targets: '.gender-chart',
        keyframes: [
          { rotateY: 180, translateY: '0' },
          { translateX: '100%', rotate: 360},
          { translateX: '-0', rotate: -360},
          { rotateY: 360 },
          // { rotateY: -360, translateY: '0' },
          { translateY: '0' },

  
  
        ],
        easing: 'linear',
        duration: 4000,
        delay: 500
     })
    }
    if (props.chosenAni === 'gentle') {
      anime({
        targets: '.gender-wrapper',
        scale: 1.1,
        // opacity: [1, 0.7],
        easing: 'easeInOutQuad',
        direction: 'alternate',
      });
  }
  }, [])


  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      }
    }
  }

  return (
    <section className='chart-wrapper gender-wrapper'>
      <div className='gender-chart'>GenderChart NR4 (cirkel)
          <Pie data={genderData} />
      </div>

    </section>

  )
}

export default GenderChart