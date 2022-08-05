import React from 'react';
import styles from './TableItems.module.css';
import TableRow from '../TableRow/TableRow';

const TableItems = (props) => {

  return (
    <>
      {
        props.data && props.data.map((item) => {
          return (
            <TableRow
              key={item.id}
              item={item}
              openModal={props.openModal}
            />
          )
        })
      }
    </>
  )
}

export default TableItems;