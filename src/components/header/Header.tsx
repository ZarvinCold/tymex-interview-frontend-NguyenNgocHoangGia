import React, { useState } from 'react';
import {
  StyledHeaderWrapper,
  StyledHeaderNav,
  StyledHeaderNavItem,
  StyledHeaderActions,
  StyledHeaderButton,
} from './Header.styled';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Marketplace', href: '#' },
  { label: 'Collections', href: '#' },
  { label: 'About', href: '#' },
];

const Header: React.FC = () => {
  const [selected, setSelected] = useState('Home');
  return (
    <StyledHeaderWrapper>
      <StyledHeaderNav>
        {navItems.map((item) => (
          <StyledHeaderNavItem
            key={item.label}
            href={item.href}
            className={selected === item.label ? 'selected' : ''}
            onClick={() => setSelected(item.label)}
          >
            {item.label}
          </StyledHeaderNavItem>
        ))}
      </StyledHeaderNav>
      <StyledHeaderActions>
        <StyledHeaderButton>Connect Wallet</StyledHeaderButton>
      </StyledHeaderActions>
    </StyledHeaderWrapper>
  );
};

export default Header;
