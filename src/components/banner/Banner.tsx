import banner from "assets/banner/banner.jpg";
import bannerBottom from "assets/banner/banner-bottom.png";
import bannerText from "assets/banner/banner-text.svg";
import bannerNFT1 from "assets/banner/banner-NFT-1.png";
import bannerNFT2 from "assets/banner/banner-NFT-2.png";
import bannerNFT3 from "assets/banner/banner-NFT-3.png";
import bannerNFT4 from "assets/banner/banner-NFT-4.png";
import bannerMain from "assets/banner/banner-main.svg";
import bannerTextBackground from "assets/banner/banner-text-background.svg";

import {
  StyledBannerWrapper,
  StyledBannerBottom,
  StyledBannerNFTImage,
  StyledBannerMainWrapper,
  StyledBannerMainImage,
  StyledBannerTextBackground,
  StyledBannerMainText,
  StyledBannerText,
  StyledCarouselWrapper,
} from "./Banner.styled";

const NFT_CAROUSEL_BANNER = [bannerNFT1, bannerNFT2, bannerNFT3, bannerNFT4];

const Banner = () => {
  return (
    <StyledBannerWrapper $banner={banner}>
      <StyledBannerText src={bannerText} alt="" />
      <StyledBannerBottom $bannerBottom={bannerBottom}>
        <StyledCarouselWrapper>
          {NFT_CAROUSEL_BANNER.map((item) => (
            <StyledBannerNFTImage key={item} src={item} />
          ))}
        </StyledCarouselWrapper>
        <StyledBannerMainWrapper>
          <StyledBannerMainImage src={bannerMain} alt="" />
          <StyledBannerTextBackground
            $bannerTextBackground={bannerTextBackground}
          >
            <StyledBannerMainText>THE DJ</StyledBannerMainText>
          </StyledBannerTextBackground>
        </StyledBannerMainWrapper>
      </StyledBannerBottom>
    </StyledBannerWrapper>
  );
};

export default Banner;
