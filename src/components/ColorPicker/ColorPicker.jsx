import React from 'react';
import { tsPropertySignature } from '@babel/types';

const ColorPicker = (props) => (
    <div>
     {props.colors.map(color =>
        <button key={color}>{color}</button>
      )}
    </div>
  );
  

export default ColorPicker;