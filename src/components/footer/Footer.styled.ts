import styled from "styled-components";

export const StyledFooterWrapper = styled.footer`
  background: #222;
  color: #fff;
  border-radius: 12px;
  padding: 48px 8%;
  text-align: center;
  position: relative;
  width: 100%;
  height: 552px;
  background-color: #17161a;
`;

export const StyledFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 48px;

  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const StyledFooterNavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 180px;

  @media (max-width: 900px) {
    min-width: unset;
    justify-content: space-between;
  }
`;

export const StyledFooterNavTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;

export const StyledFooterNavLink = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

export const StyledFooterContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledFooterContactText = styled.span`
  font-size: 16px;
  color: #fff;
`;

export const StyledFooterSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;

export const StyledFooterSubscribeInput = styled.input`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  outline: none;
  width: 200px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledFooterSubscribeButton = styled.button`
  background: linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0px 0px 20px rgba(187, 75, 255, 0.18);
  &:hover {
    opacity: 0.9;
  }
`;

export const StyledFooterBottomLinks = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 12px;
`;

export const StyledFooterCopyright = styled.span`
  font-size: 15px;
  color: #aaa;
`;

export const StyledFooterSocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  justify-content: flex-start;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const StyledFooterIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #333;
  color: #fff;
  font-size: 20px;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: #da458f;
    color: #fff;
  }
`;

export const StyledFooterLabel = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

export const StyledFooterNav = styled.div`
  display: flex;
  text-align: left;
`;

export const StyledFooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  text-align: left;
`;
