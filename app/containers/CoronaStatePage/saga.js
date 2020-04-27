/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { call, put, takeEvery } from 'redux-saga/effects';
import { COUNTRIES_STAT, PAGE_LOAD } from './constants';

function api() {
  return fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
      'x-rapidapi-key': '20b7c0bademsh6bbc3a2fd0a3458p1b7e85jsnee7be2b2c43b',
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.countries_stat) {
        return response.countries_stat;
      }
      return [];
    })
    .catch(err => {
      console.log(err);
    });
}

function* loadStates() {
  const data = yield call(api);
  yield put({ type: COUNTRIES_STAT, payload: data });
}
// Individual exports for testing
export default function* coronaStatePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(PAGE_LOAD, loadStates);
}
