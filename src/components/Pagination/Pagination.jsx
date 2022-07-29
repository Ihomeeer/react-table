// компонент с пагинацией
import { v4 as generateUid } from 'uuid';

export const Pagination = ({ itemsPerPage, totalItems, currentPage, setPage }) => {
  const pageButtons = [];

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
    <div className="pagination">
      <button className="pagination__button pagination__button_type_nav" onClick={prevPageHandler}>PREV</button>
      <ul className="pagination__list">
        {
          pageButtons.map((number) => {
            return (
              <li className="pagination__item" key={generateUid()}>
                <button className={`pagination__button ${number === currentPage ? 'pagination__button_active' : ''}`} onClick={() => changePageNumber(number)}>
                  {number}
                </button>
              </li>
            )
          })
        }
      </ul>
      <button className="pagination__button pagination__button_type_nav" onClick={nextPageHandler}>NEXT</button>
    </div>
  )
}