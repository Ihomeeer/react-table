// компонент с пагинацией
import {useEffect} from 'react';
import styles from './Pagination.module.css';
import cx from 'classnames';
import { v4 as generateUid } from 'uuid';

const Pagination = ({ itemsPerPage, totalItems, currentPage, setPage }) => {
  const pageButtons = [];

  useEffect(() => {
    setPage(1)
  }, [itemsPerPage])

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageButtons.push(i)
  }

  const changePageNumber = (pageNumber) => {
    setPage(pageNumber)
  }

  const nextPageHandler = () => {
    if (currentPage === pageButtons.length) {
      return
    } else {
      setPage(prev => prev + 1);
    }
  }

  const prevPageHandler = () => {
    if (currentPage === 1) {
      return
    } else {
      setPage(prev => prev - 1);
    }
  }

  return (
    <>
      {
        pageButtons.length > 1 &&
        <div className={styles.pagination}>
          <button className={cx(styles.button, styles.buttonNav)} onClick={prevPageHandler}>PREV</button>
          <ul className={styles.list}>
            {
              pageButtons.map((number) => {
                return (
                  <li className={styles.item} key={generateUid()}>
                    <button className={cx(styles.button, number === currentPage ? styles.buttonActive : '')} onClick={() => changePageNumber(number)}>
                      {number}
                    </button>
                  </li>
                )
              })
            }
          </ul>
          <button className={cx(styles.button, styles.buttonNav)} onClick={nextPageHandler}>NEXT</button>
        </div>
      }
    </>
  )
}

export default Pagination;