import React, { useState } from 'react';
import styles from './TableMain.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableItems from '../TableItems/TableItems';
import FilterForm from '../FilterForm/FilterForm';
import Pagination from '../Pagination/Pagination';
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
        <FilterForm
          data={props.data}
          submit={props.submit}
        />
      </div>

    </div>

  )
}

export default TableMain;