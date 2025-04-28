import React from "react";
import {
  StyledFooterWrapper,
  StyledFooterTop,
  StyledFooterNav,
  StyledFooterNavColumn,
  StyledFooterNavTitle,
  StyledFooterNavLink,
  StyledFooterContact,
  StyledFooterContactRow,
  StyledFooterContactText,
  StyledFooterSubscribe,
  StyledFooterSubscribeInput,
  StyledFooterSubscribeButton,
  StyledFooterCopyright,
  StyledFooterBottomLinks,
} from "./Footer.styled";

import { StyledMPDivider, StyledMPFLex } from "components";

const Footer: React.FC = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterTop>
        <StyledFooterNav>
          <StyledFooterNavColumn>
            <StyledFooterNavTitle>Navigation</StyledFooterNavTitle>
            <StyledFooterNavLink href="#">Our teams</StyledFooterNavLink>
            <StyledFooterNavLink href="#">About us</StyledFooterNavLink>
            <StyledFooterNavLink href="#">Home</StyledFooterNavLink>
          </StyledFooterNavColumn>
          <StyledFooterNavColumn>
            <StyledFooterNavTitle>&nbsp;</StyledFooterNavTitle>
            <StyledFooterNavLink href="#">Roadmap</StyledFooterNavLink>
            <StyledFooterNavLink href="#">Marketplace</StyledFooterNavLink>
            <StyledFooterNavLink href="#">Whitepaper</StyledFooterNavLink>
          </StyledFooterNavColumn>
          <StyledFooterNavColumn>
            <StyledFooterNavTitle>&nbsp;</StyledFooterNavTitle>
            <StyledFooterNavLink href="#">Community</StyledFooterNavLink>
            <StyledFooterNavLink href="#">News</StyledFooterNavLink>
            <StyledFooterNavLink href="#">FAQs</StyledFooterNavLink>
          </StyledFooterNavColumn>
        </StyledFooterNav>

        <StyledFooterContact>
          <span>contact us</span>
          <StyledFooterContactRow>
            <span className="material-icons-outlined">call</span>
            <StyledFooterContactText>01234568910</StyledFooterContactText>
          </StyledFooterContactRow>
          <StyledFooterContactRow>
            <span className="material-icons-round">chat</span>
            <StyledFooterContactText>
              tymex-talent@tyme.com
            </StyledFooterContactText>
          </StyledFooterContactRow>
        </StyledFooterContact>

        <StyledFooterSubscribe>
          <StyledFooterNavTitle>
            Subcribe to receive our latest update
          </StyledFooterNavTitle>
          <StyledMPFLex justify="space-between" $fullWidth>
            <StyledFooterSubscribeInput placeholder="Your email address" />
            <StyledFooterSubscribeButton>Subcribe</StyledFooterSubscribeButton>
          </StyledMPFLex>
        </StyledFooterSubscribe>
      </StyledFooterTop>

      <StyledMPDivider />

      <StyledMPFLex justify="space-between" $fullWidth>
        <StyledFooterCopyright>
          ©2023 Tyme - Edit. All Rights reserved.
        </StyledFooterCopyright>
        <StyledFooterBottomLinks>
          <StyledFooterNavLink href="#">Security</StyledFooterNavLink>
          <StyledFooterNavLink href="#">Legal</StyledFooterNavLink>
          <StyledFooterNavLink href="#">Privacy</StyledFooterNavLink>
        </StyledFooterBottomLinks>
      </StyledMPFLex>
    </StyledFooterWrapper>
  );
};

export default Footer;
