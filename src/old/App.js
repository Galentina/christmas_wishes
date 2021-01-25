import React, {useState} from 'react';
import './App.css';
import Controller from './controller';
import List from "./List";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [list, setList] = useState([{key: uuidv4(), wish:'New car'}]);


  const saveResolution = (newWish) => {
        const newList = [...list, {key: uuidv4(), wish: newWish}];
        setList(newList);
  }

    const saveNewWish = (upWish, key) => {
        const newList = list.map(el => (el.key === key) ? {...el, wish: upWish} : el);
        console.log("New list", newList);
        setList(newList);
    }


    // const saveNewWish = (upWish, key) => {
    //   const newList = [...list];
    //   for (let i=0; i<newList.length; i++) {
    //       if (newList[i].key===key) newList[i].wish = upWish;
    //   }
    //   console.log("New list", newList);
    //     setList(newList);
    // }

  return (
    <div className="app">
      <h1>Dear Santa,</h1>
        <h2>I swear I was good this year</h2>
      <Controller saveResolution={saveResolution}/>
      <h3>List of wishes</h3>
            <ul>
                {list.map(el =>
                    <li key={el.key}>{el.wish}
                        <List wish={el.wish} uid={el.key} saveNewWish={saveNewWish}/>
                    </li>
                )}
            </ul>
    </div>
  );
}

export default App;
