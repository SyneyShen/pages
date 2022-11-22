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
import { useState } from 'react';
import './login.css';

// TODO react intl universal
// register form
// forgot password form
// submit form

const LoginPage = () => {
  const [mode, setMode] = React.useState('login');

  return (
    <div
      style={{
        margin: '100px auto 100px',
        position: 'relative',
        width: '385px',
        opacity: '0.8',
      }}
    >
      <div style={{ 'text-align': 'center' }}>
        <img
          width={120}
          src="https://img.icons8.com/external-flat-satawat-anukul/64/null/external-trading-trading-flat-style-flat-satawat-anukul-24.png"
        />
        <p>Data Expert beside You</p>
      </div>

      {mode === 'login' && <LoginForm setMode={setMode} />}
      {mode === 'signup' && <RegisterForm setMode={setMode} />}
      {mode === 'forgotpassword' && <ForgotPasswordForm setMode={setMode} />}
    </div>
  );
};

const LoginForm = ({ setMode }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container
      header={<Header variant="h2">Welcome Back!</Header>}
      footer={
        <div>
          <span>
            <Button
              href="#"
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
              href="#"
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
      <form onSubmit={(e) => e.preventDefault()}>
        <Form
          actions={
            <Button variant="primary" iconName="key">
              Sign In
            </Button>
          }
        >
          <FormField
            label="Account"
            errorText={
              account != '' &&
              !checkMobileNum(account) &&
              'Invalid Mobile Number Format!'
            }
          >
            <Input
              placeholder="Mobile Phone Number"
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
            href="#"
            variant="link"
            onClick={() => {
              setMode('login');
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
              {/* <Input /> */}
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
            href="#"
            variant="link"
            onClick={() => {
              setMode('login');
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
              {/* <Input /> */}
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
