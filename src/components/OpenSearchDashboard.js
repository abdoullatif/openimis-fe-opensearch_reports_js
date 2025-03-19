import React from 'react';

/* eslint-disable */
/*function OpenSearchDashboard(props) {
  const openSearchBaseUrl = process.env.REACT_APP_OPENSEARCH_URL || 'opensearch';
  const dashboardUrl = props.dashboardUrl;
  const fullUrl = `https://${openSearchBaseUrl}/${dashboardUrl}`;
  
  console.log('OpenSearch Dashboard URL:', fullUrl);

  return (
    <iframe
      src={fullUrl}
      title="OpenSearch Dashboard"
      style={{ position: 'absolute', width: '80%', height: '90%' }}
      allow="same-origin allow-scripts"
    />
  );
};

export default OpenSearchDashboard;
*/



function OpenSearchDashboard(props) {
  const currentHostname = window.location.hostname;
  const openSearchBaseRootPath = process.env.OPENSEARCH_PROXY_ROOT ?? 'opensearch';
  const dashboardUrl = props.dashboardUrl;
  //console.log(`https://${currentHostname}/${openSearchBaseRootPath}/${dashboardUrl}`);
  const fullUrl = `http://${currentHostname}:5601/${dashboardUrl}`;
  console.log(fullUrl);
  return (
    <iframe
      //src={`/${openSearchBaseRootPath}/${dashboardUrl}`}
      src={fullUrl}
      title="OpenSearch Dashboard" // Add a unique title property
      style={{ position: 'absolute', width: '80%', height: '90%' }}
      allow="same-origin allow-scripts"
    />
  );
};

export default OpenSearchDashboard;
