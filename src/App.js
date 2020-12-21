import React, {useState} from 'react';
import Form from './componets/category-form';
import SavedLinks from './componets/saved-links';
import './App.css';

function App() {
  const [idsList, saveIdsList] = useState([]);
  const saveImageId = (picId, pageURL) => {
    if(idsList.filter(({id}) => id === picId).length) {
      return null;
    }
    saveIdsList([...idsList, {id: picId,  pageURL}])
  };
  return (
    <div className="App">
      <Form saveImageId={saveImageId} idsList={idsList}/>
      <SavedLinks idsList={idsList} />
    </div>
  );
}

export default App;
