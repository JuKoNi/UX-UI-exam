import { useEffect } from 'react';
import './CountryChart.css';
import { CountryData } from '../data/winners.js';
import { Bar } from 'react-chartjs-2';
import anime from 'animejs';



type Props = {
  chosenAni: string;
}

const CountryChart = (props: Props) => {

  useEffect(() => {
    if (props.chosenAni === 'extreme') {
      anime({
        targets: '.country-chart',
        keyframes: [
          {skew: '30deg', translateX: '2em'},
          {skew: '-30deg', translateX: 0},
          {skew: '0deg'},
          {skew: '0deg'}
        ],
        easing: 'easeInOutElastic',
        duration: 5000
     })
    }
    if (props.chosenAni === 'gentle') {
      anime({
        targets: '.country-wrapper',
        scale: 1.1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
      });
  }
  
  }, [])
  

  return (
    <section className="chart-wrapper country-wrapper">
      <div className='country-chart'>CountryChart NR6
        <Bar data={CountryData} />
      </div>

    </section>
  )
}

export default CountryChart