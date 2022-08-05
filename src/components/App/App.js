import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TableMain from '../TableMain/TableMain';
import Modal from '../Modal/Modal';
import Loading from '../Loading/Loading';
import api from '../../utils/api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // Видимость модалки с деталями
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleCloseModal = () => {
    setModalVisibility(false);
    setCurrentItem({});
  }

  const handleOpenModal = (data) => {
    setCurrentItem(data);
    setModalVisibility(true);
  }

  useEffect(() => {
    setIsLoading(true)
    api.getData()
      .then((res) => {
        setAllData(res.products);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  const handleSubmit = (min, max) => {
    const newData = handleSort(allData, min, max)
    setFilteredData(newData);
  }

  // Сортировка по данным инпутов
  function handleSort(array, min, max) {
    let modArray = [];
    array.forEach((item) => {
      if (item.price > min && item.price < max) {
        modArray.push(item)

      }
    })
    return modArray;
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className={styles.App}>
      {
        allData &&
        <TableMain
          data={allData}
          filteredData={filteredData}
          setAllData={setAllData}
          setFilteredData={setFilteredData}
          openModal={handleOpenModal}
          submit={handleSubmit}
        />
      }
      {
        allData.length > 0 && currentItem &&
        <Modal
          data={allData.length > 0 && currentItem}
          visibility={modalVisibility}
          closeModal={handleCloseModal}
        />
      }

    </div>
  );
}

export default App;
