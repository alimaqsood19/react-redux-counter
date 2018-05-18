import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/types';

export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: (action.payload += 1) };
    case DECREMENT_COUNT:
      return { ...state, count: (action.payload -= 1) };
    default:
      return state;
  }
};
