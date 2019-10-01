import React from 'react';
import styles from './ColorPicker.module.css'

const ColorPicker = (props) => (
    <div className={styles.ColorPicker}>
     {props.colors.map((color, idx) =>
        <button 
          key={color} 
          className={styles.button}
          style={{
            borderColor: color,
            backgroundColor: props.selColorIdx === idx ? 'white' : color
        }}
        onClick={() => props.handleColorSelection(idx)}
        />
      )}
    </div>
  );
  

export default ColorPicker;