import React from 'react';

/* eslint-disable */
function OpenSearchDashboard(props) {
  //const currentHostname = window.location.hostname;
  const currentHostname = process.env.REACT_APP_OPENSEARCH_HOSTNAME ?? window.location.hostname;
  const openSearchBaseRootPath = process.env.REACT_APP_OPENSEARCH_PROXY_ROOT ?? 'opensearch';
  const dashboardUrl = props.dashboardUrl;
  console.log('OpenSearchDashboard');
  console.log(currentHostname);
  console.log(openSearchBaseRootPath);
  console.log(dashboardUrl);
  console.log(`${currentHostname}/${openSearchBaseRootPath}${dashboardUrl}?embed=true&hide-filter-bar=true`);
  console.log('--------------------------------');
  return (
    <iframe
      src={`${currentHostname}/${openSearchBaseRootPath}${dashboardUrl}?embed=true&hide-filter-bar=true`}
      title="OpenSearch Dashboard" // Add a unique title property
      style={{ position: 'absolute', width: '80%', height: '90%' }}
      allow="same-origin allow-scripts"
      //allow="same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      //embed="true"
      //hide-filter-bar="true"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
};

export default OpenSearchDashboard;
