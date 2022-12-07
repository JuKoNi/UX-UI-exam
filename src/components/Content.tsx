import React, { useEffect, useState } from 'react';
import './Content.css'
import anime from 'animejs';
import Nav from './Nav';
import AveragePrizeSum from './AveragePrizeSum';
import CategoryChart from './CategoryChart';
import CountryChart from './CountryChart';
import GenderChart from './GenderChart';
import WinnersByCategory from './WinnersByCategory';
import WinnersChart from './WinnersChart';
import AnimationPref from './AnimationPref';


type Props = {}

const Content = (props: Props) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showCountry, setShowCountry] = useState<boolean>(false);
  const [showGender, setShowGender] = useState<boolean>(false);
  const [showWinnersByCategory, setShowWinnersByCategory] = useState<boolean>(false);
  const [showTopTen, setShowTopTen] = useState<boolean>(false);
  const [showAverage, setShowAverage] = useState<boolean>(false);

  const [chosenAni, setChosenAni] = useState<string>('gentle');

  const pickAnimation: (chosen: string) => void = (chosen) => {
    setChosenAni(chosen)
  }

  // TOGGLES
  const toggleCategory = () => {
    setShowCategory(!showCategory);
    setShowCountry(false);
    setShowGender(false);
    setShowWinnersByCategory(false);
    setShowTopTen(false);
    setShowAverage(false);
  }

  const toggleCountry = () => {
    setShowCategory(false);
    setShowCountry(!showCountry);
    setShowGender(false);
    setShowWinnersByCategory(false);
    setShowTopTen(false);
    setShowAverage(false);
  }

  const toggleGender = () => {
    setShowCategory(false);
    setShowCountry(false);
    setShowGender(!showGender);
    setShowWinnersByCategory(false);
    setShowTopTen(false);
    setShowAverage(false); 
  }

  const toggleWinnersByCategory = () => {
    setShowCategory(false);
    setShowCountry(false);
    setShowGender(false);
    setShowWinnersByCategory(!showWinnersByCategory);
    setShowTopTen(false);
    setShowAverage(false);
  }

  const toggleTopTen = () => {
    setShowCategory(false);
    setShowCountry(false);
    setShowGender(false);
    setShowWinnersByCategory(false);
    setShowTopTen(!showTopTen);
    setShowAverage(false);
  }

  const toggleAverage = () => {
    setShowCategory(false);
    setShowCountry(false);
    setShowGender(false);
    setShowWinnersByCategory(false);
    setShowTopTen(false);
    setShowAverage(!showAverage);
  }

  useEffect(() => {
    anime({
      targets: '.boom',
      opacity: 1,
      delay: 4000,
    });
    anime({
      targets: '.thread .spark',
      keyframes: [
        {top: '-3px', left: '-33px',rotate: '90deg', scale: 1.2 },
        {top: '-5px', left: '-30px', rotate: '-90deg', scale: 1},
        {top: '-10px',left: '-25px',rotate: '90deg',scale: 1.2},
        {top: '-14px', left: '-20px', rotate: '-90deg', scale: 1 },
        {top: '-16px',left: '-15px', rotate: '90deg', scale: 1.2},
        {top: '-19px', left: '-10px', rotate: '-90deg', scale: 1},
        {top: '-21px', left: '-5px', rotate: '90deg', scale: 1.2},
        {top: '-23px', left: '0px', rotate: '-90deg', scale: 1},
        {top: '-21px', left: '10px', rotate: '90deg', scale: 1.2},
        {top: '-22px', left: '15px', rotate: '-90deg', scale: 1},
        {top: '-21px', left: '25px', rotate: '90deg', scale: 1.2},
        {top: '-23px', left: '40px', rotate: '-90deg', scale: 1},
        {top: '-21px', left: '55px', rotate: '90deg', scale: 1.2},
        {top: '-10px', left: '71px', scale: 1.5, },
        {scale: 2, rotate: '-91deg'},
        {scale: 5.4},
      ],
      duration: 4000,
      loop: false
    });
  }, [])
  


  return (
    <section className='main-section'>
      <AnimationPref pickAnimation={pickAnimation} />
      <Nav toggleCategory={toggleCategory} toggleCountry={toggleCountry} toggleGender={toggleGender} toggleWinnersByCategory={toggleWinnersByCategory} toggleTopTen={toggleTopTen} toggleAverage={toggleAverage}
      showCategory={showCategory} showCountry={showCountry} showGender={showGender} showWinnersByCategory={showWinnersByCategory} showTopTen={showTopTen} showAverage={showAverage}/>
      <section className='content-container'>
          <h3>Pick a tab to see the statistics!</h3>
          <div className="candle">
            <div className="thread">
              <div className='spark'>
                <p className='boom'>BOOM</p>
              </div>
            </div>
          </div>
        {showCategory ? <CategoryChart chosenAni={chosenAni} /> : null}
        {showCountry ? <CountryChart chosenAni={chosenAni}/> : null}
        {showGender ? <GenderChart chosenAni={chosenAni}/> : null}
        {showWinnersByCategory ? <WinnersByCategory chosenAni={chosenAni}/> : null }
        {showTopTen ? <WinnersChart chosenAni={chosenAni}/> : null}
        {showAverage ? <AveragePrizeSum chosenAni={chosenAni}/> : null}

      </section>

    </section>
  )
}

export default Content