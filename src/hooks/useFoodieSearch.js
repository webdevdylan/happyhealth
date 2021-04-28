import { useReducer } from 'react';
import foodieReducer from '../context/Foodie/foodieReducer';
import axios from 'axios';

const ID = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const KEY = process.env.REACT_APP_EDAMAN_APPLICATION_KEY;

const initialState = {
  loading: false,
  recipes: [],
  count: null,
};

const useFoodieSearch = () => {
  const [state, dispatch] = useReducer(foodieReducer, initialState);

  const fetchData = async (searchQuery) => {
    dispatch({ type: 'IS_LOADING' });

    await axios
      .get(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${ID}&app_key=${KEY}
    `
      )
      .then(({ data }) => {
        dispatch({ type: 'FETCH_DATA', payload: data });
      })
      .catch((error) => console.error(error));
  };

  return [state, fetchData];
};

export default useFoodieSearch;
