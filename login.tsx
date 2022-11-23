import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import * as React from 'react';
import { useState, useEffect } from 'react';
import './login.css';

import intl from 'react-intl-universal';
import useForceUpdate from 'use-force-update';
import ButtonDropdown from '@cloudscape-design/components/button-dropdown';
import { ButtonDropdownProps } from '@cloudscape-design/components';
import Spinner from '@cloudscape-design/components//spinner';
import { useCookies } from 'react-cookie';

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

const LoginPage = () => {
  const [mode, setMode] = React.useState('loginbypassword');
  const forceUpdate = useForceUpdate();
  // const [initDone, setInitDone] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);

  // useEffect(() => {
  //   initializeIntl();
  // }, []);

  // const initializeIntl = () => {
  //   let currentLocale = intl.determineLocale({
  //     urlLocaleKey: 'lang',
  //     cookieLocaleKey: 'lang',
  //   });

  //   if (!LOCALES_LIST.some((item) => item.value === currentLocale)) {
  //     currentLocale = 'en-US';
  //   }

  //   setCurrentLocale(currentLocale);
  //   setCookie('lang', currentLocale);
  //   setInitDone(true);

  //   console.log(currentLocale);
  //   console.log('init is done. 1111111111');
  // };

  const setCurrentLocale = (currentLocale: string) => {
    intl.init({
      currentLocale,
      locales: LOCALE_DATA,
    });
  };

  const onLocaleChange = (e) => {
    setCurrentLocale(e.detail.id);
    setCookie('lang', e.detail.id);
    console.log(e.detail.id);
    forceUpdate();
  };

  const localeSelector = (
    <ButtonDropdown
      items={LOCALES_LIST.map((locale) => {
        return { id: locale.value, text: locale.label };
      })}
      onItemClick={onLocaleChange}
    >
      {
        LOCALES_LIST.find(
          (locale) => locale.value == intl.getInitOptions().currentLocale
        )?.label
      }
    </ButtonDropdown>
  );

  // if (!initDone) {
  //   return (
  //     <div
  //       style={{
  //         background: '#ffffff',
  //         width: '100%',
  //         height: '100%',
  //         'text-align': 'center',
  //       }}
  //     >
  //       <Spinner />
  //       <br />
  //       Loading
  //     </div>
  //   );
  // } else {
  return (
    <div
      style={{
        margin: '100px auto 100px',
        position: 'relative',
        width: '385px',
        opacity: '0.8',
      }}
    >
      <div style={{ height: '40px' }}>
        <span style={{ float: 'right' }}>{localeSelector}</span>
      </div>
      <div>
        <center>
          <img
            width={120}
            src="https://img.icons8.com/external-flat-satawat-anukul/64/null/external-trading-trading-flat-style-flat-satawat-anukul-24.png"
          />
          <p className="login-sub-title">Data Expert beside You</p>
        </center>
      </div>

      {mode === 'loginbypassword' && <PasswordLoginForm setMode={setMode} />}
      {mode === 'signup' && <RegisterForm setMode={setMode} />}
      {mode === 'forgotpassword' && <ForgotPasswordForm setMode={setMode} />}
      {mode === 'loginbycode' && <CodeLoginForm setMode={setMode} />}
    </div>
  );
  // }
};

const PasswordLoginForm = ({ setMode }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container
      header={
        <Header
          variant="h2"
          actions={
            <Button
              variant="link"
              onClick={() => {
                setMode('loginbycode');
              }}
            >
              Sign In by Code
            </Button>
          }
        >
          {intl.get('login.title')}
        </Header>
      }
      footer={
        <div>
          <span>
            <Button
              variant="link"
              onClick={() => {
                setMode('signup');
              }}
            >
              Register
            </Button>
          </span>
          <span style={{ float: 'right' }}>
            <Button
              variant="link"
              onClick={(_) => {
                setMode('forgotpassword');
              }}
            >
              Forgot Password
            </Button>
          </span>
        </div>
      }
    >
      <form
        onSubmit={(e) => {
          console.log(e);
          e.preventDefault();
        }}
      >
        <Form
          actions={
            <Button variant="primary" iconName="key">
              Sign In
            </Button>
          }
        >
          <FormField
            label={intl.get('login.account.label')}
            errorText={
              account != '' &&
              !checkMobileNum(account) &&
              intl.get('login.account.error.text')
            }
          >
            <Input
              placeholder={intl.get('login.account.placeholder')}
              value={account}
              onChange={(event: { detail: { value: string } }) => {
                if (event.detail.value.length <= 11) {
                  setAccount(event.detail.value);
                }
              }}
            />
          </FormField>
          <FormField
            label="Password"
            errorText={
              password != '' &&
              !checkPassword(password) &&
              'At Least 1 Capital Letter, 1 Small Letter, 1 Number, 1 Special Char and Minimum length of 8'
            }
          >
            <Input
              placeholder="Your Password"
              type="password"
              value={password}
              onChange={(event: { detail: { value: string } }) =>
                setPassword(event.detail.value)
              }
            />
          </FormField>
        </Form>
      </form>
    </Container>
  );
};

const RegisterForm = ({ setMode }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  return (
    <Container
      header={<Header variant="h2">Sign Up</Header>}
      footer={
        <span>
          <Button
            variant="link"
            onClick={() => {
              setMode('loginbypassword');
            }}
          >
            Back to Sign in
          </Button>
        </span>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <Form
          actions={
            <Button variant="primary" iconName="user-profile">
              Register
            </Button>
          }
        >
          <FormField
            label="New Account"
            stretch
            errorText={
              account != '' &&
              !checkMobileNum(account) &&
              'Invalid Mobile Number Format!'
            }
          >
            <SpaceBetween size={'xxl'} direction="horizontal">
              <Input
                placeholder="Mobile Phone Number"
                value={account}
                onChange={(event: { detail: { value: string } }) => {
                  if (event.detail.value.length <= 11) {
                    setAccount(event.detail.value);
                  }
                }}
              />
              <Button>Get Code</Button>
            </SpaceBetween>
          </FormField>
          <FormField
            label="Verification Code"
            errorText={
              code != '' &&
              !checkVerificationCode(code) &&
              'Invalid Verification Code'
            }
          >
            <Input
              placeholder="Verification Code"
              type="text"
              value={code}
              onChange={(event: { detail: { value: string } }) => {
                if (event.detail.value.length <= 5) {
                  setCode(event.detail.value);
                }
              }}
            />
          </FormField>
          <FormField
            label="Password"
            errorText={
              password != '' &&
              !checkPassword(password) &&
              'At Least 1 Capital Letter, 1 Small Letter, 1 Number, 1 Special Char and Minimum length of 8'
            }
          >
            <Input
              placeholder="Your Password"
              type="password"
              value={password}
              onChange={(event: { detail: { value: string } }) =>
                setPassword(event.detail.value)
              }
            />
          </FormField>
          <FormField
            label="Confirm Password"
            errorText={
              confirmpassword != '' &&
              !checkConfirmPassword(password, confirmpassword) &&
              'Passwords are not same!'
            }
          >
            <Input
              placeholder="Repeat Password"
              type="password"
              value={confirmpassword}
              onChange={(event: { detail: { value: string } }) =>
                setConfirmPassword(event.detail.value)
              }
            />
          </FormField>
        </Form>
      </form>
    </Container>
  );
};

const ForgotPasswordForm = ({ setMode }) => {
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');

  return (
    <Container
      header={<Header variant="h2">Forgot Password</Header>}
      footer={
        <span>
          <Button
            variant="link"
            onClick={() => {
              setMode('loginbypassword');
            }}
          >
            Back to Sign in
          </Button>
        </span>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <Form
          actions={
            <Button variant="primary" iconName="unlocked">
              Reset Password
            </Button>
          }
        >
          <FormField
            label="Account"
            stretch
            errorText={
              account != '' &&
              !checkMobileNum(account) &&
              'Invalid Mobile Number Format!'
            }
          >
            <SpaceBetween size={'xxl'} direction="horizontal">
              <Input
                placeholder="Mobile Phone Number"
                value={account}
                onChange={(event: { detail: { value: string } }) => {
                  if (event.detail.value.length <= 11) {
                    setAccount(event.detail.value);
                  }
                }}
              />
              <Button disabled={!checkMobileNum(account)}>Get Code</Button>
            </SpaceBetween>
          </FormField>
          <FormField
            label="Verification Code"
            errorText={
              code != '' &&
              !checkVerificationCode(code) &&
              'Invalid Verification Code'
            }
          >
            <Input
              placeholder="Verification Code"
              type="text"
              value={code}
              onChange={(event: { detail: { value: string } }) => {
                if (event.detail.value.length <= 5) {
                  setCode(event.detail.value);
                }
              }}
            />
          </FormField>
          <FormField
            label="Password"
            errorText={
              password != '' &&
              !checkPassword(password) &&
              'At Least 1 Capital Letter, 1 Small Letter, 1 Number, 1 Special Char and Minimum length of 8'
            }
          >
            <Input
              placeholder="Your Password"
              type="password"
              value={password}
              onChange={(event: { detail: { value: string } }) =>
                setPassword(event.detail.value)
              }
            />
          </FormField>
          <FormField
            label="Confirm Password"
            errorText={
              confirmpassword != '' &&
              !checkConfirmPassword(password, confirmpassword) &&
              'Passwords are not same!'
            }
          >
            <Input
              placeholder="Repeat Your Password"
              type="password"
              value={confirmpassword}
              onChange={(event: { detail: { value: string } }) =>
                setConfirmPassword(event.detail.value)
              }
            />
          </FormField>
        </Form>
      </form>
    </Container>
  );
};

const CodeLoginForm = ({ setMode }) => {
  const [account, setAccount] = useState('');
  const [code, setCode] = useState('');
  return (
    <Container
      header={<Header variant="h2">Sign In</Header>}
      footer={
        <span>
          <Button
            variant="link"
            onClick={() => {
              setMode('loginbypassword');
            }}
          >
            Back to Sign in by Password
          </Button>
        </span>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <Form
          actions={
            <Button variant="primary" iconName="key">
              Sign In
            </Button>
          }
        >
          <FormField
            label="New Account"
            stretch
            errorText={
              account != '' &&
              !checkMobileNum(account) &&
              'Invalid Mobile Number Format!'
            }
          >
            <SpaceBetween size={'xxl'} direction="horizontal">
              <Input
                placeholder="Mobile Phone Number"
                value={account}
                onChange={(event: { detail: { value: string } }) => {
                  if (event.detail.value.length <= 11) {
                    setAccount(event.detail.value);
                  }
                }}
              />
              <Button>Get Code</Button>
            </SpaceBetween>
          </FormField>
          <FormField
            label="Verification Code"
            errorText={
              code != '' &&
              !checkVerificationCode(code) &&
              'Invalid Verification Code'
            }
          >
            <Input
              placeholder="Verification Code"
              type="text"
              value={code}
              onChange={(event: { detail: { value: string } }) => {
                if (event.detail.value.length <= 5) {
                  setCode(event.detail.value);
                }
              }}
            />
          </FormField>
        </Form>
      </form>
    </Container>
  );
};

function checkMobileNum(input: string): boolean {
  const mobileNumberReg = RegExp('^1[0-9]{10}$');
  return mobileNumberReg.test(input);
}

function checkVerificationCode(input: string): boolean {
  const verificationCodeReg = RegExp('^[0-9]{5}$');
  return verificationCodeReg.test(input);
}

function checkPassword(input: string): boolean {
  const passwordReg = RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$'
  );
  return passwordReg.test(input);
}

function checkConfirmPassword(pw1: String, pw2: String): boolean {
  if (pw1 == pw2) {
    return true;
  } else {
    return false;
  }
}

export default LoginPage;
