import { combineReducers } from 'redux';

export const images = (state = [], action) => {
    switch (action.type) {
      case 'GET_IMAGES':
        return action.data;
      default:
        return state;
    }
  };
  
  export const reducers = combineReducers({ images });