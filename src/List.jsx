import React, { useState} from 'react';
import './App.css';

function List(props) {

    // const keyOn = props.uid+"on";
    // const keyOff = props.uid+"off";

    const [upWish, setupWish]= useState(props.wish);

    const updateWish = (upWish, key) =>{
        props.saveNewWish(upWish, key);
        setupWish('');
    }



    const [openButton, sepOpenButton] = useState(false);
    const buttonName = ['Update', "Close"];
    const  openButtonOk = () => {
        sepOpenButton(!openButton);
    }


    return (
        <div>
            {openButton &&
                <div className='next'>
                <input value={upWish} className='input' onChange={(event) => setupWish(event.target.value)}
                       placeholder={'Change your wish.'}/> &nbsp;
                <button disabled={!upWish} className='button3' onClick={() => {updateWish(upWish, props.uid)}}>&#10004;</button>&nbsp;&nbsp;
            {/*<button>&#10006;</button>*/}
                </div>
            }
                <button className='button2' onClick={openButtonOk}>{!openButton ? buttonName[0] : <span className='buttonClose'> {buttonName[1]} </span>}</button>
            &nbsp;&nbsp;
            {!openButton &&
            <div className='next'>
                <button onClick={() => {props.deleteEl(props.uid)}} className='buttonDel'>delete</button>&nbsp;&nbsp;
                <button disabled={props.ifLast(props.uid)} className='button3' onClick={() => {props.putInOrder('down', props.uid)}}>&#11167;</button>&nbsp;&nbsp;
                <button disabled={props.ifFirst(props.uid)} className='button3' onClick={() => {props.putInOrder('up', props.uid)}}>&#11165;</button>
            </div>
            }

        </div>
    );
}

export default List;
