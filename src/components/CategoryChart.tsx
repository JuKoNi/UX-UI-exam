import React, { useEffect } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import anime, { AnimeInstance } from 'animejs';
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
          targets: '.category-chart',
          scale: 1.1,
          // opacity: [1, 0.7],
          easing: 'easeInOutQuad',
          direction: 'alternate',
        });
    }
    }, [])


  return (

    <section className='chart-wrapper category-chart'>
      <div className='category-wrapper'>
          <h2>Chart of the Nobel Prize categories</h2>
          <Bar data={categoryData} />
      </div>

    </section>



  )
}

export default CategoryChart