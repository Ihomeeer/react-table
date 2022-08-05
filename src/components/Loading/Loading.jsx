// надпись "загрузка" и анимация загрузки
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p className={styles.loadingText}>Загрузка</p>
      <div className={styles.spinnerOuter}>
        <div className={styles.loadingSpinner}></div>
      </div>
    </div>
  )
}

export default Loading;