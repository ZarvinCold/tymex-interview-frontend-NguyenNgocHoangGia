import styled from "styled-components";
import { StyledMPText } from "../components.styled";

export const StyledBannerWrapper = styled.div<{ $banner: string }>`
  width: 100%;
  height: 800px;
  position: relative;
  background: url(${(props) => props.$banner}) center/cover no-repeat;

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

export const StyledBannerBottom = styled.div<{ $bannerBottom: string }>`
  background: url(${(props) => props.$bannerBottom}) center/contain repeat;
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
  scroll-snap-align: start;
`;

export const StyledBannerMainWrapper = styled.div`
  width: min(100%, 500px);
  height: 100%;
  position: relative;
`;

export const StyledBannerMainImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 1100px) {
    bottom: 36px;
    right: 36px;
    transform: scale(1.5);
  }
`;

export const StyledBannerTextBackground = styled.div<{
  $bannerTextBackground: string;
}>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.$bannerTextBackground}) center/contain
    no-repeat;
  position: absolute;
  text-align: center;
  bottom: 0px;
  right: -24px;
`;

export const StyledBannerMainText = styled(StyledMPText)`
  position: absolute;
  font-weight: ${({ theme }) => theme.typography.weightSemiBold};
  font-size: 5vw;
  width: 90%;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`;

export const StyledBannerText = styled.img`
  width: 100%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 10%;
  padding-right: 40%;
`;

export const StyledCarouselWrapper = styled.div`
  max-width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: auto;
  gap: 16px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;
