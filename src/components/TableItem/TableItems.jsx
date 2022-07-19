import React from 'react';
import styles from './TableItems.module.css';

const TableItems = (props) => {
  return (
    <>
      {
        props.data && props.data.map((item) => {
          return (
            <tr key={item.id}>
              
              <td className={styles.tableItem}>
                {item.title}
              </td>

              <td className={styles.tableItem}>
                {item.category}
              </td>

              <td className={styles.tableItem}>
                {item.price}
              </td>

              <td className={styles.tableItem}>
                {item.discountPercentage}
              </td>

              <td className={styles.tableItem}>
                {item.stock}
              </td>

            </tr>
          )
        })
      }
    </>
  )
}

export default TableItems;