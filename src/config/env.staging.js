module.exports = {
  production: true,
  env: {
    'APP_ZHOUSE_SERVICE': 'https://yjqa.zbjsaas.com/app-zhouse-service',
    'CLIENT_ID': 'saas-client',
    'CLIENT_SECRET': '$2a$10$hv1ZNontrZr8ptqVP6LhPekcIatksbom.aeBZd3iRl1PMtDVFJK6u',
    'API_URL' : 'https://yjqa.zbjsaas.com/zuul/',
    'AUTHORIZE_SERVICE': 'authorize',
    'LOGIN_SERVICE': '/third/authForLogin?authorizerAppid={0}&businessURI={1}',
    'WX_API_URL': 'https://yjqa.zbjsaas.com/wlm',
    'WX_APP_ID': 'wx81a47ac834894fd9',
    'DOMAIN': 'https://zhouse-app-pre.zbjsaas.com/',
    'SECRET': 'test',
  },
  imgPrefix: '',
  wxUserApi: 'https://yjqa.zbjsaas.com/weimeng',
  qrcodeUrl: 'https://yjqaconsole.zbjsaas.com',
  allanceUrl: 'https://yjqa.zbjsaas.com/wap/zhouse/page/promotions/recruitPartner'
};
