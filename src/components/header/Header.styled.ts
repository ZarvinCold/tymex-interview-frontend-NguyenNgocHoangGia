import styled from 'styled-components';
import { StyledMPText } from 'components';

export const StyledHeaderWrapper = styled.header`
  width: 100%;
  height: 84px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  position: fixed;
  background-color: ${({ theme }) => theme.colors.headerBg};
  z-index: 1;
`;

export const StyledHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.h2};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -1px;
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledHeaderNavItem = styled(StyledMPText).attrs({ as: 'a' })`
  font-size: ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: ${({ theme }) => theme.typography.weightMedium};
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.85;
  }
  &.selected {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  &.selected::after {
    content: '';
    display: block;
    margin: 4px auto 0 auto;
    width: 60%;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  }
`;

export const StyledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledHeaderButton = styled.button`
  color: ${({ theme }) => theme.colors.textLight};
  padding: 10px 24px;
  font-size: ${({ theme }) => theme.typography.h5};
  font-weight: ${({ theme }) => theme.typography.weightSemiBold};
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
  height: 40px;
  background: ${({ theme }) => theme.colors.buttonGradient};
  box-shadow: 0px 0px 50px rgba(187, 75, 255, 0.32);
  border-radius: 4px;
`;
