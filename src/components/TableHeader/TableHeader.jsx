import React, { useState } from 'react';
import iconUpPath from '../../vendor/icons/sort_up.svg';
import iconDownPath from '../../vendor/icons/sort_down.svg';
import iconSortPath from '../../vendor/icons/sort.svg';
import styles from './TableHeader.module.css';

const TableHeader = (props) => {
  const [currentTab, setCurrentTab] = useState('');
  const [sortingOrder, setSortingOrder] = useState('up');

  const handleSort = (col) => {
    setCurrentTab(col);
    if (sortingOrder === 'up') {
      const sortedData = props.allData && [...props.allData].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      props.setAllData(sortedData);
      // pagination()
      setSortingOrder('down');
    }
    if (sortingOrder === 'down') {
      const sortedData = props.allData && [...props.allData].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      props.setAllData(sortedData);
      // pagination()
      setSortingOrder('up');
    }
  }

  return (
    <thead className={styles.tableHeader}>
      <tr className={styles.header}>

        <th
          className={styles.headerItem}
          onClick={() => handleSort('title')}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Title</p>
            {
              currentTab === 'title'
                ?
                sortingOrder === 'up'
                  ?
                  <img src={iconUpPath} className={styles.icon} alt="стрелка вверх" />
                  :
                  <img src={iconDownPath} className={styles.icon} alt="стрелка вниз" />
                :
                <img src={iconSortPath} className={styles.icon} alt="иконка сортировки" />
            }
          </div>
        </th>

        <th
          className={styles.headerItem}
          onClick={() => handleSort('category')}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Category</p>
            {
              currentTab === 'category'
                ?
                sortingOrder === 'up'
                  ?
                  <img src={iconUpPath} className={styles.icon} alt="стрелка вверх" />
                  :
                  <img src={iconDownPath} className={styles.icon} alt="стрелка вниз" />
                :
                <img src={iconSortPath} className={styles.icon} alt="иконка сортировки" />
            }
          </div>
        </th>

        <th
          className={styles.headerItem}
          onClick={() => handleSort('price')}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Price, $</p>
            {
              currentTab === 'price'
                ?
                sortingOrder === 'down'
                  ?
                  <img src={iconUpPath} className={styles.icon} alt="стрелка вверх" />
                  :
                  <img src={iconDownPath} className={styles.icon} alt="стрелка вниз" />
                :
                <img src={iconSortPath} className={styles.icon} alt="иконка сортировки" />
            }
          </div>
        </th>

        <th
          className={styles.headerItem}
          onClick={() => handleSort('discountPercentage')}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Discount, %</p>
            {
              currentTab === 'discountPercentage'
                ?
                sortingOrder === 'down'
                  ?
                  <img src={iconUpPath} className={styles.icon} alt="стрелка вверх" />
                  :
                  <img src={iconDownPath} className={styles.icon} alt="стрелка вниз" />
                :
                <img src={iconSortPath} className={styles.icon} alt="иконка сортировки" />
            }
          </div>
        </th>

        <th
          className={styles.headerItem}
          onClick={() => handleSort('stock')}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Amount, pieces</p>
            {
              currentTab === 'stock'
                ?
                sortingOrder === 'down'
                  ?
                  <img src={iconUpPath} className={styles.icon} alt="стрелка вверх" />
                  :
                  <img src={iconDownPath} className={styles.icon} alt="стрелка вниз" />
                :
                <img src={iconSortPath} className={styles.icon} alt="иконка сортировки" />
            }
          </div>
        </th>

      </tr>
    </thead>
  );
};

export default TableHeader;