/* eslint-disable camelcase */
/* eslint-disable react/no-unused-prop-types */
/**
 *
 * CoronaStatePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container } from '@material-ui/core';
import makeSelectCoronaStatePage, { getCountriesState } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SimpleTable from '../../components/SimpleTable';
import { pageload } from './actions';

export function CoronaStatePage(props) {
  useInjectReducer({ key: 'coronaStatePage', reducer });
  useInjectSaga({ key: 'coronaStatePage', saga });
  useEffect(() => {
    props.loadPage();
  }, []);
  const columns = [
    { field: 'country_name', label: 'Country Name' },
    { field: 'cases', label: 'Cases' },
    { field: 'deaths', label: 'Deaths' },
    { field: 'total_recovered', label: 'Total Recovered' },
    { field: 'new_deaths', label: 'New Deaths' },
    { field: 'new_cases', label: 'New Cases' },
    { field: 'serious_critical', label: 'Serious Critical' },
    { field: 'active_cases', label: 'Active Cases' },
  ];
  return (
    <Container>
      <Helmet>
        <title>CoronaStatePage</title>
        <meta name="description" content="Description of CoronaStatePage" />
      </Helmet>
      <SimpleTable columns={columns} rows={props.countriesState} />
    </Container>
  );
}

CoronaStatePage.propTypes = {
  loadPage: PropTypes.func.isRequired,
  countriesState: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  coronaStatePage: makeSelectCoronaStatePage(),
  countriesState: getCountriesState(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPage: () => {
      dispatch(pageload(true));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CoronaStatePage);
