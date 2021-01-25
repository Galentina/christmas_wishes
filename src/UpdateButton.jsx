import React, { useState } from 'react';
import './App.css';
// import {v4 as uuidv4} from "uuid";

function UpdateButton(props) {
    // const wish = props
    // const saveNewWish = () => props.saveNewWish;
    // const updateWish = () => props.updateWish;
    //

    const[upWish, setupWish]= useState('');


    const updateWish = (upWish, key) =>{
        props.saveNewWish(upWish, key);
        setupWish('');
        console.log(upWish, key);
    }

    function viewDiv(){
        document.getElementById("divOff").style.display = "block";
        document.getElementById("divOn").style.display = "none";
    }

    // function openInput(){
    //     document.getElementById("div1").style.display = "block";
    // }
    //
    // function closeInput(){
    //     document.getElementById("div1").style.display = "none";
    // }


    return (
        <div className="App">

                   <input value={upWish} className='input' onChange={(event)=>setupWish(event.target.value)}
                           placeholder={'Change your wish.'}/>&nbsp;
                    <button  onClick={() => {updateWish(upWish, props.wish.key)}}>&#10004;</button>&nbsp;
                    <button  >&#10006;</button>
            {/*<div id='divOn'>*/}
            {/*    <button className='button2' onFocus={() => {viewDiv()}}>update</button>*/}
            {/*    <button className='button3' >delete</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default UpdateButton;
