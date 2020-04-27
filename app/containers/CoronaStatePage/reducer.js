/*
 *
 * CoronaStatePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, COUNTRIES_STAT, PAGE_LOAD } from './constants';

export const initialState = {
  countries_stat: [],
  load: false,
};

/* eslint-disable default-case, no-param-reassign */
const coronaStatePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case COUNTRIES_STAT:
        draft.countries_stat = action.payload;
        break;
      case PAGE_LOAD:
        draft.load = action.payload;
        break;
    }
  });

export default coronaStatePageReducer;
