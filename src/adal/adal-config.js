
var adalConfig = {
  tenant: 'common',
  clientId: 'f322f397-4d53-4a76-9bcd-f1e835dc9d3b',
  extraQueryParameter: 'nux=1',
  disableRenewal: true,
  endpoints: {
    'https://graph.microsoft.com': 'https://graph.microsoft.com'
  }
  // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
};

module.exports = adalConfig;