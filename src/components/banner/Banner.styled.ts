import styled from "styled-components";
import { StyledMPText } from "../components.styled";

export const StyledBannerWrapper = styled.div<{ banner: string }>`
  width: 100%;
  height: 800px;
  position: relative;
  background: url(${(props) => props.banner}) center/cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const StyledBannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  letter-spacing: -0.96px;
  text-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  margin: 0;
`;

export const StyledBannerBottom = styled.div<{ bannerBottom: string }>`
  background: url(${(props) => props.bannerBottom}) center/contain repeat;
  background-size: auto 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  padding: 0 8%;
`;

export const StyledBannerNFTImage = styled.img`
  height: 224px;
`;

export const StyledBannerMainWrapper = styled.div`
  width: min(35%, 500px);
  height: 100%;
  position: relative;
`;

export const StyledBannerMainImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const StyledBannerTextBackground = styled.div<{
  bannerTextBackground: string;
}>`
  background: url(${(props) => props.bannerTextBackground}) center/contain
    no-repeat;
  position: absolute;
  padding: 60px 120px;
  text-align: center;
  bottom: 0px;
  right: -24px;
`;

export const StyledBannerMainText = styled(StyledMPText)`
  font-weight: ${({ theme }) => theme.typography.weightSemiBold};
  display: inline-block;
  font-size: 72px;
  transform: translate(-60px, -6px);
`;

export const StyledBannerText = styled.img`
  position: absolute;
  top: 18%;
  left: 10%;
`;
