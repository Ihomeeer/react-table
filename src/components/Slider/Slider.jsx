import React, { useState } from 'react';
import styles from './Slider.module.css';

const Slider = (props) => {
  const [sliderValue, setSliderValue] = useState(props.defaultValue);

  const handleChange = (e) => {
    setSliderValue(e.target.value)
  }


  return (
    <div className={styles.sliderElement}>
      <p className={styles.sliderTitle}>{props.title}</p>
      <div className={styles.sliderContainer}>
        <input type='range' className={styles.slider} value={sliderValue} min={props.min} max={props.max} onChange={handleChange}></input>
        <p className={styles.sliderValue}>{sliderValue}</p>
      </div>
    </div>
  )
}

export default Slider;