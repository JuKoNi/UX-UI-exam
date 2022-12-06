import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import nobel from '../assets/nobel.png';

type Props = {}

const Hero = (props: Props) => {

    const navigate = useNavigate();

    const enterSite = () => {
      navigate('/charts');
      console.log('bajs');
      
    }

  return (
    <section className="hero">
      <img className='hero-ball bounce' src={nobel} alt="" />
      <div className='hero-frame box'>
          <h1 className='hero-text'> The Ultimate Nobel Prize Statistic Site</h1>
      </div>
      <button className='hero-btn' onClick={(event: React.MouseEvent<HTMLElement>) => enterSite()}>ENTER</button>
    </section>
  )
}

export default Hero;