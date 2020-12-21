import React from 'react';
import PropTypes from "prop-types";
import { FaThumbsUp, FaStar } from 'react-icons/fa';

const CategoryList = props => {
  const {list, isLoading, saveImageId, idsList} = props;
  const getTags = (tags="") => tags.split(",").map((t, index) => <span key={index} className="tags-item">{t}</span>);
  const isImageSaved = id => idsList.filter(list => list.id === id).length;
  
  return (
    <div className="category-list">
      {isLoading 
        ? <div>Loading...</div>
        : (list || []).map(({previewURL, tags, favorites, likes, id, pageURL, user}, index) =>  index < 3 && (
            <div className="list-item" key={index}>
              <div className="image-wrapper">
               {isImageSaved(id) ? <span className="img-saved">Saved</span> : <span className="img-not-saved">Save</span>}
               <img src={previewURL} alt={user} onClick={() => saveImageId(id, pageURL)}/>
              </div>
              
              <div className="wrapper">
                <div className="tags">
                  {getTags(tags)}
                </div>
                <div className="likes-fav">
                  <span>{likes} <FaThumbsUp /></span>
                  <span>{favorites} <FaStar /></span>
                </div>
              </div>
            </div>
        )
      )}
    </div>
  );
}

CategoryList.propTypes = {
  list: PropTypes.array,
  isLoading: PropTypes.bool, 
  saveImageId: PropTypes.func,
  idsList: PropTypes.array,
};

export default CategoryList;