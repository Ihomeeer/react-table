import React from 'react';
import styles from './TableHeader.module.css';

const TableHeader = (props) => {
  return (
    <thead className={styles.tableHeader}>
      <tr className={styles.header}>

        <th
          className={styles.headerItem}
          onClick={() => props.sort('title')}>
          Title
        </th>

        <th
          className={styles.headerItem}
          onClick={() => props.sort('category')}>
          Category
        </th>

        <th
          className={styles.headerItem}
          onClick={() => props.sort('price')}>
          Price, $
        </th>

        <th
          className={styles.headerItem}
          onClick={() => props.sort('discountPercentage')}>
          Discount, %
        </th>

        <th
          className={styles.headerItem}
          onClick={() => props.sort('stock')}>
          Amount, pieces
        </th>

        {/* <th>
          <select
            value={props.filterType}
            onChange={e => console.log('click')}
          >
            <option value={''} disabled>Выберите поле для поиска</option>
            <option value={'header'}>Название</option>
            <option value={'amount'}>Количество</option>
            <option value={'distance'}>Растояние</option>
          </select>
        </th>
        <th>
          <select
            value={props.filterOptions}
            onChange={e => console.log('click')}
          >
            <option value={''} disabled>Фильтрация по</option>
            <option value={'includes'}>Содержит</option>
            <option value={'equal'}>Равно</option>
            <option value={'more'}>Больше</option>
            <option value={'less'}>Меньше</option>
          </select>
        </th>
        <th>
          <input
            type="text"
            value={props.filtrationReq ? props.filtrationReq : ''}
            onChange={(e) => console.log('click')}
            placeholder={'Найти...'} />
        </th> */}
      </tr>
    </thead>
  );
};

export default TableHeader;