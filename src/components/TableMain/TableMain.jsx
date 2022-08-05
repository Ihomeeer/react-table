import React, { useState, useEffect } from 'react';
import styles from './TableMain.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableItems from '../TableItems/TableItems';
import { Pagination } from '../Pagination/Pagination';
import Slider from '../Slider/Slider';

const TableMain = (props) => {
  // активная страница
  const [currentPage, setCurrentPage] = useState(1);
  // количество элементов на странице
  const [itemsPerPage, setItemsPerPage] = useState(10);


  const lastItemIndex = currentPage * itemsPerPage;
  const firsItemIndex = lastItemIndex - itemsPerPage;
  // const sortedItems =  props.data && handleSort(props.data, minPriceSliderVal, maxPriceSliderVal)
  let currentItemsList = props.data && props.data?.slice(firsItemIndex, lastItemIndex);

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
    <div className={styles.section}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHeader
            setPage={setCurrentPage}
            setAllData={props.setAllData}
            allData={props.data}
          />
          <tbody>
            <TableItems
              data={currentItemsList && currentItemsList}
            />
          </tbody>
        </table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={props.data && props.data.length}
          currentPage={currentPage}
          setPage={setCurrentPage}
        />
      </div>
      <div className={styles.slidersContainer}>
        <Slider
          min={10}
          max={100}
          defaultValue={10}
          title={'Positions per page'}
          setValue={setItemsPerPage}
          sliderValue={itemsPerPage}
        />

      </div>

    </div>

  )
}

export default TableMain;