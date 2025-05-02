import styled from "styled-components";
import { StyledMPText } from "components";

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

export const StyledHeaderNavWeb = styled(StyledHeaderNav)`
  @media (max-width: 1000px) {
    visibility: hidden;
  }
`;

export const StyledHeaderNavItem = styled(StyledMPText).attrs({ as: "a" })`
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
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  &.selected::after {
    content: "";
    display: block;
    margin: 4px auto 0 auto;
    width: 60%;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
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

export const StyledHamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 1002;

  span {
    display: block;
    width: 28px;
    height: 4px;
    margin: 4px 0;
    background: #fff;
    border-radius: 2px;
    transition: 0.3s;
  }
  span.open:nth-child(1) {
    transform: translateY(12px) rotate(45deg);
  }
  span.open:nth-child(2) {
    opacity: 0;
  }
  span.open:nth-child(3) {
    transform: translateY(-12px) rotate(-45deg);
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const StyledHeaderNavResponsive = styled(StyledHeaderNav)`
  visibility: hidden;
  @media (max-width: 1000px) {
    visibility: visible;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(23, 22, 26, 0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    z-index: 1001;
    transform: translateY(-100vh);
    transition:
      transform 0.3s,
      opacity 0.3s;
    opacity: 0;
    pointer-events: none;
    &.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
    & > * {
      font-size: 2rem;
    }
  }
`;
