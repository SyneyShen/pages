import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import React = require('react');
import './login.css';

const LoginPage = () => {
  const [mode, setMode] = React.useState('login');

  if (mode === 'login') {
    return <LoginForm setMode={setMode} />;
  }

  if (mode === 'signup') {
    return <RegisterForm setMode={setMode} />;
  }

  if (mode === 'forgotpassword') {
    return <ForgotPasswordForm setMode={setMode} />;
  }
};

const LoginForm = ({ setMode }) => {
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
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
      <Container
        header={<Header variant="h2">Welcome Back!</Header>}
        footer={
          <div>
            <span>
              <Button
                href="#"
                variant="link"
                onClick={(_) => {
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
            <FormField label="Account">
              <Input
                placeholder="Mobile Phone Number"
                value={account}
                onChange={(event: {
                  detail: { value: React.SetStateAction<string> };
                }) => setAccount(event.detail.value)}
              />
            </FormField>
            <FormField label="Password">
              <Input
                placeholder="Your Password"
                type="password"
                value={password}
                onChange={(event: {
                  detail: { value: React.SetStateAction<string> };
                }) => setPassword(event.detail.value)}
              />
            </FormField>
          </Form>
        </form>
      </Container>
    </div>
  );
};

const RegisterForm = ({ setMode }) => {
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div
      style={{
        margin: '100px auto 100px',
        position: 'relative',
        width: '385px',
        opacity: '0.8',
      }}
    >
      <Container
        header={<Header variant="h2">Sign Up</Header>}
        footer={
          <span>
            <Button
              href="#"
              variant="link"
              onClick={(_) => {
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
              <Button variant="primary" iconName="key">
                Sign In
              </Button>
            }
          >
            <FormField label="Account">
              <Input
                placeholder="Mobile Phone Number"
                value={account}
                onChange={(event: {
                  detail: { value: React.SetStateAction<string> };
                }) => setAccount(event.detail.value)}
              />
            </FormField>
            <FormField label="Password">
              <Input
                placeholder="Your Password"
                type="password"
                value={password}
                onChange={(event: {
                  detail: { value: React.SetStateAction<string> };
                }) => setPassword(event.detail.value)}
              />
            </FormField>
          </Form>
        </form>
      </Container>
    </div>
  );
};

const ForgotPasswordForm = ({ setMode }) => {
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div
      style={{
        margin: '100px auto 100px',
        position: 'relative',
        width: '385px',
        opacity: '0.8',
      }}
    >
      <Container
        header={<Header variant="h2">Forgot Password</Header>}
        footer={
          <span>
            <Button
              href="#"
              variant="link"
              onClick={(_) => {
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
              <Button variant="primary" iconName="key">
                Sign In
              </Button>
            }
          >
            <FormField label="Account">
              <Input
                placeholder="Mobile Phone Number"
                value={account}
                onChange={(event: {
                  detail: { value: React.SetStateAction<string> };
                }) => setAccount(event.detail.value)}
              />
            </FormField>
            <FormField label="Password">
              <Input
                placeholder="Your Password"
                type="password"
                value={password}
                onChange={(event: {
                  detail: { value: React.SetStateAction<string> };
                }) => setPassword(event.detail.value)}
              />
            </FormField>
          </Form>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
