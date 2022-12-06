import React from 'react';
import { useRef, useState } from 'react';
import { AnimeInstance } from 'animejs';

import './AllCharts.css'

// *** COMPONENTS ***
import AnimationPref from './AnimationPref';

import Content from './Content';

type Props = {}

const AllCharts = (props: Props) => {

  return (
    <main className='main'>
        <Content />
    </main>
  )
}

export default AllCharts