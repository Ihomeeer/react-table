import React, { useState } from 'react';
import styles from './TableMain.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableItems from '../TableItem/TableItems';
import { Pagination } from '../Pagination/Pagination';
import Slider from '../Slider/Slider';

const TableMain = (props) => {
  // активная страница
  const [currentPage, setCurrentPage] = useState(1);
  // количество элементов на странице
  const [itemsPerPage] = useState(9);

  const lastItemIndex = currentPage * itemsPerPage;
  const firsItemIndex = lastItemIndex - itemsPerPage;
  const currentItemsList = props.data && props.data?.slice(firsItemIndex, lastItemIndex)


  return (
    <>
      <table className={styles.table}>
        <TableHeader
          setPage={setCurrentPage}
          setAllData={props.setAllData}
          allData={props.data}
        />
        <tbody>
          <TableItems
            data={currentItemsList}
          />
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={props.data && props.data.length}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
      <Slider
        min={1}
        max={100}
        defaultValue={10}
        title={'Positions per page'}
      />
    </>

  )
}

export default TableMain;