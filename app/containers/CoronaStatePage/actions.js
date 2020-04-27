/*
 *
 * CoronaStatePage actions
 *
 */

import { DEFAULT_ACTION, PAGE_LOAD, COUNTRIES_STAT } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function pageload(payload) {
  return {
    type: PAGE_LOAD,
    payload,
  };
}

export function updateCountriesState(payload) {
  return {
    type: COUNTRIES_STAT,
    payload,
  };
}
