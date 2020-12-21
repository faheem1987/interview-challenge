import React, {useState} from 'react';
import Form from './componets/category-form';
import SavedLinks from './componets/saved-links';
import './App.css';

function App() {
  const [idsList, saveIdsList] = useState([]);
  const saveImageId = (id, pageURL) => saveIdsList([...idsList, {id,  pageURL}]);
  return (
    <div className="App">
      <Form saveImageId={saveImageId} idsList={idsList}/>
      <SavedLinks idsList={idsList} />
    </div>
  );
}

export default App;
