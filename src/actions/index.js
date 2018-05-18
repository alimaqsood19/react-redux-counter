import { INCREMENT_COUNT, DECREMENT_COUNT } from './types';

export const incrementCount = count => dispatch => {
  dispatch({
    type: INCREMENT_COUNT,
    payload: count
  });
};

export const decrementCount = count => dispatch => {
  dispatch({
    type: DECREMENT_COUNT,
    payload: count
  });
};
