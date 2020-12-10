// 正式
module.exports = {
  production: true,
  env: {
    'APP_ZHOUSE_SERVICE': 'https://zhouse-api.zbjsaas.com',
    'CLIENT_ID': 'saas-client',
    'CLIENT_SECRET': '$2a$10$hv1ZNontrZr8ptqVP6LhPekcIatksbom.aeBZd3iRl1PMtDVFJK6u',
    'API_URL' : 'https://zuul.zbjsaas.com/',
    'AUTHORIZE_SERVICE': 'authorize',
    'LOGIN_SERVICE': '/third/authForLogin?authorizerAppid={0}&businessURI={1}',
    'WX_API_URL': 'https://zyx.zbjsaas.com/wlm',
    'WX_APP_ID': 'wx6a60b363b4e0bf0f',
    'DOMAIN': 'https://zhouse-app.zbjsaas.com/',
    'SECRET': '10ab1058bfcd11e9870a549f35048274',
  },
  imgPrefix: '',
  wxUserApi: 'https://zyx.zbjsaas.com/weimeng',
  qrcodeUrl: 'https://console.zbjsaas.com',
  allanceUrl: 'https://m.zbjsaas.com/zhouse/page/promotions/recruitPartner'
};
