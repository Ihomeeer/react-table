import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TableMain from '../TableMain/TableMain';
import Slider from '../Slider/Slider';
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
      <Slider
        min={1}
        max={100}
        defaultValue={10}
        title={'Positions per page'}
      />
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
