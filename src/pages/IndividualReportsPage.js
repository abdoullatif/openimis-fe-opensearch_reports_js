import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Helmet, withModulesManager, formatMessage } from '@openimis/fe-core';
import { injectIntl } from 'react-intl';
import { withTheme, withStyles } from '@material-ui/core/styles';
import OpenSearchDashboard from '../components/OpenSearchDashboard';
import { INDIVIDUAL_REPORTS } from '../constants';
import { fetchOpenSearchDashboard } from '../actions';

const styles = (theme) => ({
  page: theme.page,
  fab: theme.fab,
});

function IndividualReportsPages(props) {
  const { intl, classes } = props;
  const dispatch = useDispatch();
  const {
    dashboard,
  } = useSelector((store) => store.openSearchReports);
  
  // Debug: Vérification du state Redux
  //console.log('🔍 Debug IndividualReportsPage:');
  //console.log('store.openSearchReports:', useSelector((store) => store.openSearchReports));
  //console.log('dashboard:', dashboard);
  //console.log('dashboard?.url:', dashboard?.url);

  useEffect(() => {
    const params = [`name_Iexact: "${INDIVIDUAL_REPORTS}"`];
    dispatch(fetchOpenSearchDashboard(params));
  }, []);

  return (
    <div className={classes.page}>
      <Helmet title={formatMessage(intl, 'openSearchReports', 'openSearch')} />
      <OpenSearchDashboard
        dashboardUrl={dashboard?.url}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
});

export default injectIntl(
  withModulesManager(withTheme(withStyles(styles)(connect(mapStateToProps)(IndividualReportsPages)))),
);
