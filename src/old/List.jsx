import React, { useState} from 'react';
import './App.css';

function List(props) {

    const keyOn = props.uid+"on";
    const keyOff = props.uid+"off";

    const [upWish, setupWish]= useState('');
    const updateWish = (upWish, key) =>{
        props.saveNewWish(upWish, key);
        setupWish('');
    }

    function viewDiv(){
        document.getElementById(keyOff).style.display = "block";
        document.getElementById(keyOn).style.display = "none";
    }

    function hideDiv(){
        document.getElementById(keyOff).style.display = "none";
        document.getElementById(keyOn).style.display = "block";
    }

    return (
        <div>
                <div id={keyOff}>
                        <input value={upWish} className='input' onChange={(event)=>setupWish(event.target.value)}
                               placeholder={'Change your wish.'}/>&nbsp;
                        <button  onClick={() => {updateWish(upWish, props.uid)}}>&#10004;</button>&nbsp;
                        <button onFocus={() => {hideDiv()}}>&#10006;</button>
                </div>
                 <div id={keyOn}>
                     <button className='button2' onFocus={() => {viewDiv()}}>update</button>
                     <button className='button3'>delete</button>
                 </div>
        </div>
    );
}

export default List;
