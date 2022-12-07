import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import anime from 'animejs';
import { categoryData } from '../data/awards';
import './CategoryChart.css'


type Props = {
  chosenAni: string;
}

const CategoryChart = (props: Props) => {


      useEffect(() => {
        if (props.chosenAni === 'extreme') {
          anime({
            targets: '.category-chart',
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
          targets: '.category-wrapper',
          scale: 1.1,
          easing: 'easeInOutQuad',
          direction: 'alternate',
        });
    }
    }, [])


  return (

    <section className='chart-wrapper category-wrapper'>
      <div className='category-chart'>
          <h2>Chart of the Nobel Prize categories</h2>
          <Bar data={categoryData} />
      </div>

    </section>



  )
}

export default CategoryChart