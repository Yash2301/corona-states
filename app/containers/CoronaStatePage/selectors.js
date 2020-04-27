import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the coronaStatePage state domain
 */

const selectCoronaStatePageDomain = state =>
  state.coronaStatePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CoronaStatePage
 */

const makeSelectCoronaStatePage = () =>
  createSelector(
    selectCoronaStatePageDomain,
    substate => substate,
  );

const getCountriesState = () =>
  createSelector(
    selectCoronaStatePageDomain,
    substate => substate.countries_stat,
  );

export default makeSelectCoronaStatePage;

export { selectCoronaStatePageDomain, getCountriesState };
