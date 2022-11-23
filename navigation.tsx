import TopNavigation from '@cloudscape-design/components/top-navigation';
import React = require('react');
import { Outlet, useNavigate } from 'react-router-dom';
// import logo from '../../logo.svg';

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

const profileActions = [
  { type: 'button', id: 'profile', text: 'Profile' },
  { type: 'button', id: 'security', text: 'Security' },
  { type: 'button', id: 'signout', text: 'Sign out' },
];

const NavigationBar = function () {
  const navigate = useNavigate();

  return (
    <>
      <TopNavigation
        i18nStrings={i18nStrings}
        identity={{
          href: '#',
          title: 'Expert A',
          logo: {
            alt: 'Expert logo',
          },
        }}
        utilities={[
          {
            type: 'button',
            variant: 'link',
            iconName: 'add-plus',
            onClick: () => {
              navigate('/main/market');
            },
          },
          {
            type: 'button',
            variant: 'link',
            iconName: 'angle-left',
            onClick: () => {
              navigate('/main/trend');
            },
          },
          {
            type: 'button',
            variant: 'link',
            iconName: 'bug',
            onClick: () => {
              navigate('/main/commodity');
            },
          },
          {
            type: 'button',
            ariaLabel: 'translate',
            iconUrl: 'https://img.icons8.com/arcade/512/translation.png',
          },
          {
            type: 'menu-dropdown',
            description: 'customer@example.com',
            iconName: 'user-profile',
            items: profileActions,
          },
        ]}
      />
      <Outlet />
    </>
  );
};

export default NavigationBar;
