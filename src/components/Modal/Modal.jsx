// компонент карточки
import React from 'react';
import styles from './Modal.module.css';
import cx from 'classnames';
import iconRatingPath from '../../vendor/icons/rating.svg';

const Modal = (props) => {

  const handleCopyData = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`Title: ${props.data.title}, price: $${props.data.price}, discount: ${props.data.discountPercentage}%`)
        .then(() => {
          console.log('data copied');
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
    } else {
      return
    }
  }

  return (
    <>
      {
       props.visibility === true &&
        <div className={styles.cardOverlay}>
          <div className={styles.cardGeneral}>
            <button className={styles.cardButton} onClick={props.closeModal}>&#10006;</button>
            <h2 className={styles.cardHeader}>
              {props.data.title}
            </h2>

            <img src={props.data.images[0]} alt={props.data.title} className={styles.cardImage} />

            <article className={styles.cardArticle}>

              <div className={styles.titleContainer}>
              <p className={cx(styles.cardText, styles.cardTitle)}>{props.data.brand}</p>
              <p className={styles.category}>{props.data.category}</p>
              </div>



              <div className={styles.ratingContainer}>
                <p className={styles.cardText}>{props.data.rating}</p>
                <img src={iconRatingPath} className={styles.ratingIcon} alt="rating" />
                <p className={cx(styles.cardText, styles.price)}>${props.data.price}</p>
              </div>

              <p className={cx(styles.cardText, styles.description)}>{props.data.description}</p>
            </article>
            <button className={styles.cardCopyButton} onClick={handleCopyData}>Copy data</button>
          </div>
        </div>
      }
    </>
  )
}

export default Modal;