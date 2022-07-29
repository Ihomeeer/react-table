import React from 'react';
import styles from './TableMain.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableItems from '../TableItem/TableItems';

const TableMain = (props) => {
  return (
    <table className={styles.table}>
      <TableHeader
        setAllData={props.setAllData}
        allData={props.data}
      />
      <tbody>
        <TableItems
          data={props.data}
        />
      </tbody>
    </table>
  )
}

export default TableMain;