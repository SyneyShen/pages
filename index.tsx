import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import intl from 'react-intl-universal';

// import App from './App';
import LoginPage from './login';
import AppRouter from './router';
import { useCookies } from 'react-cookie';

function initializeLang() {
  
const LOCALES_LIST = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
];

const LOCALE_DATA = {
  'en-US': {
    'login.title': 'Welcome Back!',
    'login.account.label': 'User Account',
    'login.account.placeholder': 'Mobile Number',
    'login.account.error.text': 'Invalid Mobile Number Format!',
  },
  'zh-CN': {
    'login.title': '欢迎回来!',
    'login.account.label': '用户账户',
    'login.account.placeholder': '请输入手机号码',
    'login.account.error.text': '无效的手机号码！',
  },
};

// const [cookies, setCookie, removeCookie] = useCookies(['lang']);

let currentLocale = intl.determineLocale({
  urlLocaleKey: 'lang',
  cookieLocaleKey: 'lang',
});

if (!LOCALES_LIST.some((item) => item.value === currentLocale)) {
  currentLocale = 'en-US';
}

intl.init({
  currentLocale,
  locales: LOCALE_DATA,
});
// setCookie('lang', currentLocale);
// setInitDone(true);

console.log(currentLocale);
console.log('init is done. 33333333333333');
}

initializeLang();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter lang={intl.getInitOptions().currentLocale as string} />
    </BrowserRouter>
  </StrictMode>
);
