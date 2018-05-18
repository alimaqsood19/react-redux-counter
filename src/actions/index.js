import { INCREMENT_COUNT, DECREMENT_COUNT } from './types';

export const incrementCount = count => async dispatch => {
  dispatch({
    type: INCREMENT_COUNT,
    payload: count
  });
};

export const decrementCount = count => async dispatch => {
  dispatch({
    type: DECREMENT_COUNT,
    payload: count
  });
};
