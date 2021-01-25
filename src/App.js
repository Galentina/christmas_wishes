import React, {useState} from 'react';
import './App.css';
import Controller from './controller';
import List from "./List";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [list, setList] = useState([]);


  const saveResolution = (newWish) => {
        const newList = [...list, {key: uuidv4(), wish: newWish}];
        setList(newList);
  }

    const saveNewWish = (upWish, key) => {
        const newList = list.map(el => (el.key === key) ? {...el, wish: upWish} : el);
        setList(newList);
    }

    const putInOrder = (arrow, key) => {
        let temp;
        const newList = [...list];
      if (arrow==='down') {
          for (let i = 0; i < newList.length; i++) {
              if (newList[i].key === key) {
                  temp = newList[i];
                  newList[i] = newList[i + 1];
                  newList[i + 1] = temp;
                  break;
              }
          }
      }
      if (arrow==='up') {
          for (let i = 0; i < newList.length; i++) {
              if (newList[i].key === key) {
                  temp = newList[i];
                  newList[i] = newList[i - 1];
                  newList[i - 1] = temp;
                  break;
              }
          }
      } setList(newList);
    }

    const ifFirst = (key) => (list[0].key===key);
    const ifLast = (key) => (list[list.length-1].key===key);
    const ifUnique = () => (list.length===1);

    const deleteEl = (key) => {
        const newList = list.filter(el => el.key!==key);
        setList(newList);
    }

  return (
    <div className="app">
      <h1>Dear Santa,</h1>
        <h2>I swear I was good this year</h2>
      <Controller saveResolution={saveResolution}/>
      <h3>List of wishes</h3>
            <ul>
                {list.map(el =>
                    <li key={el.key}><div id='wish'>{el.wish}</div>&nbsp;&nbsp;
                        <span className='on'>
                        <List wish={el.wish} uid={el.key} saveNewWish={saveNewWish} putInOrder={putInOrder} ifLast={ifLast} ifFirst={ifFirst} deleteEl={deleteEl} ifUnique={ifUnique}/>
                        </span>
                    </li>
                )}
            </ul>
    </div>
  );
}

export default App;
