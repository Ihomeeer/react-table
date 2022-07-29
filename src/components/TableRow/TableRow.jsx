import React from 'react';
import styles from './TableRow.module.css';

const TableRow = (props) => {

  const handleCopyData = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`Title: ${props.item.title}, price: $${props.item.price}, discount: ${props.item.discountPercentage}%`)
        .then(() => {
          console.log('data copied');
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
    } else {
      return
    }
  }

  return (
    <>
      <tr key={props.item.id} className={styles.tableRow} onClick={handleCopyData}>

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