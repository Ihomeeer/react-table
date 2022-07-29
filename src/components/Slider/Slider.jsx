import React, { useState } from 'react';
import styles from './Slider.module.css';

const Slider = (props) => {

  const handleChange = (e) => {
    props.setValue(e.target.value)
  }

  return (
    <div className={styles.sliderElement}>
      <p className={styles.sliderTitle}>{props.title}</p>
      <div className={styles.sliderContainer}>
        <input type='range' className={styles.slider} value={props.sliderValue} min={props.min} max={props.max} onChange={handleChange} step={props.title === 'Positions per page' ? 10 : 1}></input>
        <p className={styles.sliderValue}>{props.sliderValue}</p>
      </div>
    </div>
  )
}

export default Slider;