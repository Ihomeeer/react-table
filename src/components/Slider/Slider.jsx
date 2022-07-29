import React, { useState } from 'react';
import styles from './Slider.module.css';

const Slider = (props) => {
  const [value, setValue] = useState(12);


  return (
    <div className={styles.sliderElement}>
      <p className={styles.sliderTitle}>{props.title}</p>
      <div className={styles.sliderContainer}>
        <input type='range' className={styles.slider} value={value} min={props.min} max={props.max} onChange={setValue}></input>
        <p className={styles.sliderValue}>{value}</p>
      </div>
    </div>
  )
}

export default Slider;