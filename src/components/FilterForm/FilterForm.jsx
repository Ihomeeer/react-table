import React, { useState, useEffect } from 'react';
import styles from './FilterForm.module.css';
import Slider from '../Slider/Slider';

const FilterForm = (props) => {

  const [maxPriceSliderVal, setMaxPriceSliderVal] = useState(0);
  const [minPriceSliderVal, setMinPriceSliderVal] = useState(0);
  const [pricesRange, setPricesRange] = useState({ max: 0, min: 0 });

  useEffect(() => {
    const max = handleSetPrice(props.data).max;
    const min = handleSetPrice(props.data).min;
    setMaxPriceSliderVal(max);
    setMinPriceSliderVal(min);
    setPricesRange({ max: max, min: min })
  }, [props.data]);

  // Минимальная и максимальная цена
  const handleSetPrice = (array) => {
    const pricesArray = props.data && array.map((item) => item.price);
    const maxPrice = pricesArray && Math.max(...pricesArray);
    const minPrice = pricesArray && Math.min(...pricesArray);
    return { max: maxPrice, min: minPrice }
  }

  return (
    <>
      {
        pricesRange.max !== 0 && pricesRange.min !== 0 &&
        <form className={styles.slidersForm} onSubmit={props.submit}>
          <h2 className={styles.formTitle}>
            Price range
          </h2>
          <Slider
            min={pricesRange.min}
            max={pricesRange.max}
            defaultValue={maxPriceSliderVal}
            title={'Max. price'}
            setValue={setMaxPriceSliderVal}
            sliderValue={maxPriceSliderVal}
          />
          <Slider
            min={pricesRange.min}
            max={pricesRange.max}
            defaultValue={minPriceSliderVal}
            title={'Min. price'}
            setValue={setMinPriceSliderVal}
            sliderValue={minPriceSliderVal}
          />
          <button type="submit" className={styles.submitButton}>Apply</button>
        </form>
      }
    </>
  )
}

export default FilterForm;