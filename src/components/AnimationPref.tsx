import React, { useRef } from 'react';
import './AnimationPref.css'

type Props = {
    pickAnimation: (chosen: string) => void;
}

const AnimationPref = (props: Props) => {
    const gentleRef = useRef<HTMLInputElement | null>(null);
    const extremeRef = useRef<HTMLInputElement | null>(null);


    const handleChange = () => {
        if (gentleRef.current?.checked) {
            props.pickAnimation(gentleRef.current.value)
        } else if (extremeRef.current?.checked) {
            props.pickAnimation(extremeRef.current.value)
        }
    }


  return (
    <section className='pref-container'>
        <p>Please choose your animation preferences:</p>
        <div className='pref-radio'>
            <div className='gentle'>
                <input ref={gentleRef}
                type="radio"
                name="pref"
                id="gentle"
                value='gentle'
                defaultChecked
                onClick={handleChange} />
                <label htmlFor="gentle"> Gentle </label>
            </div>
            <div className='extreme'>
                <input ref={extremeRef}
                type="radio"
                name="pref"
                id="extreme"
                value='extreme'
                onClick={handleChange}  />
                <label htmlFor="extreme"> Extreme </label>
            </div>
        </div>
    </section>
  )
}

export default AnimationPref