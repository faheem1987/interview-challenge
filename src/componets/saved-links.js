import React from 'react';
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from 'react-icons/fa';


const SavedLinks = ({idsList}) => (
  <div className="searched-category">
    <h2>Saved</h2>
    <ul className="saved-images">
      {idsList.map(({ id, pageURL }) => <li><a href={pageURL} target="_blank" rel="noreferrer"># {id} <FaExternalLinkAlt /></a></li>)}
    </ul>
  </div>
);

SavedLinks.propTypes = {
  idsList: PropTypes.array,
};

export default SavedLinks;