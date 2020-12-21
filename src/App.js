import React, {useState} from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Form from './componets/category-form';
import './App.css';

function App() {
  const [idsList, saveIdsList] = useState([]);
  const saveImageId = (id, pageURL) => saveIdsList([...idsList, {id,  pageURL}]);
  return (
    <div className="App">
      <Form saveImageId={saveImageId} idsList={idsList}/>
      <div className="searched-category">
        <h2>Saved</h2>
        <ul className="saved-images">
          {idsList.map(({ id, pageURL }) => <li><a href={pageURL}># {id} <FaExternalLinkAlt /></a></li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
