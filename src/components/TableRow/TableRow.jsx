import React from 'react';
import styles from './TableRow.module.css';

const TableRow = (props) => {

  const handleOpenModal = (data) => {
    props.item && props.openModal(data);
  }

  return (
    <>
      <tr key={props.item.id} className={styles.tableRow} onClick={() => {handleOpenModal(props.item)} }>

        <td className={styles.tableRowItem}>
          {props.item.title}
        </td>

        <td className={styles.tableRowItem}>
          {props.item.category}
        </td>

        <td className={styles.tableRowItem}>
          {props.item.price}
        </td>

        <td className={styles.tableRowItem}>
          {props.item.discountPercentage}
        </td>

        <td className={styles.tableRowItem}>
          {props.item.stock}
        </td>

      </tr>
    </>
  )
}

export default TableRow;