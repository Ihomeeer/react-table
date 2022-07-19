import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TableMain from '../TableMain/TableMain';
import api from '../../utils/api';

function App() {
  const [allData, setAllData] = useState([]);
  const [sortingOrder, setSortingOrder] = useState('up');

  useEffect(() => {
    api.getData()
      .then((res) => {
        setAllData(res.products);
      })
  }, []);

  const handleSort = (col) => {
    if (sortingOrder === 'up') {
      const sortedData = allData && [...allData].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setAllData(sortedData);
      // pagination()
      setSortingOrder('down');
    }
    if (sortingOrder === 'down') {
      const sortedData = allData && [...allData].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setAllData(sortedData);
      // pagination()
      setSortingOrder('up');
    }
  }

  return (
    <div className={styles.App}>
      {
        allData &&
        <TableMain
          data={allData}
          sort={handleSort}
        />
      }

    </div>
  );
}

export default App;
