import { useEffect } from 'react';
import './WinnersChart.css'
import { winnersData } from '../data/winners';
import { Bar } from 'react-chartjs-2';
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
          {rotateX: '0deg'},
          {rotateX: '40deg'},
          {rotateX: '70deg'},
          {rotateX: '100deg'},
          {rotateX: '180deg'},
          {rotateX: '260deg'},
          {rotateX: '360deg'}
        ],
        easing: 'spring(1, 80, 10, 0)',
        duration: 5000
     })
    }
    if (props.chosenAni === 'gentle') {
      anime({
        targets: '.winners-wrapper',
        scale: 1.1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
      });
  }
  }, [])
    
  return (
    <section className="chart-wrapper winners-wrapper">
      <div className="winners-chart">
        <Bar data={winnersData} />
      </div>

    </section>
  )
}

export default WinnersChart