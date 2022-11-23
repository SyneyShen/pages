import * as React from 'react';
import intl from 'react-intl-universal';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{intl.get('login.title')}</p>
    </div>
  );
}
