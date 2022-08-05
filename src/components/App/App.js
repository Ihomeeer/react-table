import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TableMain from '../TableMain/TableMain';
import api from '../../utils/api';

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    api.getData()
      .then((res) => {
        setAllData(res.products);
      })
  }, []);

  const handleSubmit = (e, min, max) => {
    e.preventDefault();
    setAllData(handleSort(allData, min, max));
  }

    // Сортировка по данным инпутов
    function handleSort(array, min, max) {
      let modArray = []
      array.forEach((item) => {
        if (item.price > min && item.price < max) {
          modArray.push(item)
        }
      })
      return modArray;
    }

  return (
    <div className={styles.App}>
        {
          allData &&
          <TableMain
            data={allData}
            setAllData={setAllData}
            submit={handleSubmit}
          />
        }
    </div>
  );
}

export default App;
