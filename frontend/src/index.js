import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-solid-svg-icons';
import { 
  faTrash,
  faEllipsisH
 } from '@fortawesome/free-solid-svg-icons';

 import { faThumbsUp, faStar } from '@fortawesome/free-regular-svg-icons';

library.add(
  faThumbsUp,
  faStar,
  faTrash,
  faEllipsisH
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


