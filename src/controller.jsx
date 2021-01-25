import React, {useState} from 'react';
import './App.css';

function Controller(props) {

    const[newResolution, setNewResolution]= useState('');

    const saveButtonHandler = () =>{
        props.saveResolution(newResolution);
        setNewResolution('');
    }


    return (
        <div>
            My new wish:&nbsp;<input className='input' onChange={(event)=>setNewResolution(event.target.value)}
                                   value={newResolution} placeholder={'Add a new wish.'}/>&nbsp;
            <button disabled={!newResolution} className='button1' onClick={saveButtonHandler}>save</button>
        </div>
    );
}

export default Controller;
