import React, { useEffect } from 'react';
import './WinnersChart.css'
import { winnersData } from '../data/winners';
import { Pie, Bar, Line } from 'react-chartjs-2';
import anime from 'animejs';


type Props = {
  chosenAni: string;
}

const WinnersChart = (props: Props) => {

  useEffect(() => {
    if (props.chosenAni === 'extreme') {
      anime({
        targets: '.winners-chart',
        keyframes: [
          {rotateX: '40deg'},
          {rotateX: '70deg'},
          {rotateX: '100deg'},
          {rotateX: '140deg'},
          {rotateX: '180deg'},
          {rotateX: '360deg'}
        ],
        easing: 'easeInOutElastic',
        duration: 5000
     })
    }
    if (props.chosenAni === 'gentle') {
      anime({
        targets: '.winners-chart',
        scale: 1.1,
        // opacity: [1, 0.7],
        easing: 'easeInOutQuad',
        direction: 'alternate',
      });
  }
  }, [])
    
  return (
    <section className="chart-wrapper winners-wrapper">
      <div className="winners-chart">WinnersChart NR7
        <Bar data={winnersData} />
      </div>

    </section>
  )
}

export default WinnersChart