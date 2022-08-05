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
  // если есть массив с фильтрованными данными, то на вход подается именно он
  let currentItemsList = props.filteredData.length > 0 ? props.filteredData && props.filteredData?.slice(firsItemIndex, lastItemIndex) : props.data && props.data?.slice(firsItemIndex, lastItemIndex);

  return (
    <div className={styles.section}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHeader
            setPage={setCurrentPage}
            setAllData={props.filteredData.length > 0 ? props.filteredData && props.setFilteredData : props.data && props.setAllData}
            allData={props.filteredData.length > 0 ? props.filteredData && props.filteredData : props.data && props.data}
          />
          <tbody>
            <TableItems
              data={currentItemsList && currentItemsList}
              openModal={props.openModal}
            />
          </tbody>
        </table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={props.filteredData.length > 0 ? props.filteredData && props.filteredData.length : props.data && props.data.length}
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