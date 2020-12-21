import React, {useState} from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import CategoryList from './category-list';
const API_KEY = "13136421-266c28a6d61717bc2e4e6a83e";
const categories = ["fashion", "nature", "backgrounds", "science", "education", "people", "feelings", "religion",
  "health", "places", "animals", "industry", "food", "computer", "sports", "transportation", "travel", "buildings",
  "business", "music"];

const CategoryForm = (props) => {
  const { saveImageId, idsList } = props;
  const [state, setState] = useState({
    list: [],
    keyword: "",
    category: "fashion",
    isLoading: false
  });
  const onSubmit = (e) => {
    const {keyword, category} = state;
    setState({...state, isLoading: true})
    e.preventDefault();

    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${keyword}%20${category}`)
      .then((res) => {
        const { data } = res;
        setState({...state, list: data.hits || [], isLoading: false})
      });
  };

  const {isLoading, list} = state;
  return (
    <div>
      <form className="category-form" onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="keyword..."
          onChange={({target}) => setState({ ...state, keyword: target.value })}/>

        <select name="categories" onChange={({target}) => setState({ ...state, category: target.value })} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>Category...</option>
          {categories.map((c, index) => <option value={c} key={index}>{c}</option>)}
        </select>
        <button type="submit">Search</button>
      </form>
      <CategoryList list={list} isLoading={isLoading} saveImageId={saveImageId} idsList={idsList}/>
    </div>
  );
}

CategoryForm.propTypes = {
  saveImageId: PropTypes.func,
  idsList: PropTypes.array,
};

export default CategoryForm;