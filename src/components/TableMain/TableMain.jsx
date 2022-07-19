import React from 'react';
import styles from './TableMain.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableItems from '../TableItem/TableItems';

const TableMain = (props) => {
  return (
    <table className={styles.table}>
        <TableHeader 
        sort={props.sort}
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