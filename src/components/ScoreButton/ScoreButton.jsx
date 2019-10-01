import React from 'react';
import styles from './ScoreButton.module.css'

const ScoreButton = (props) => (
  <button 
    className={styles.button}
    disabled={props.disabled}
    onClick={props.handleScoreClick}
  >
     ✔
  </button>
);

export default ScoreButton;