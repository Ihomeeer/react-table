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

  return (
    <div className={styles.App}>
      {
        allData &&
        <TableMain
          data={allData}
          setAllData={setAllData}
        />
      }

    </div>
  );
}

export default App;
