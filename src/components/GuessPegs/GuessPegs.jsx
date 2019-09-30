import React from 'react';
import './GuessPegs.css';
import GuessPeg from '../GuessPeg/GuessPeg';

const GuessPegs = (props) => (
    <div className="GuessPegs">
        <GuessPeg  color={props.colors[props.code[0]]} 
            currentGuess={props.currentGuess}/>

        <GuessPeg  color={props.colors[props.code[1]]} 
            currentGuess={props.currentGuess}/>

        <GuessPeg  color={props.colors[props.code[2]]} 
            currentGuess={props.currentGuess}/>
            
        <GuessPeg  color={props.colors[props.code[3]]}  
            currentGuess={props.currentGuess}/>
    </div>
);

export default GuessPegs