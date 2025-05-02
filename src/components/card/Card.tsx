import React from "react";
import {
  StyledCardWrapper,
  StyledCardImage,
  StyledCardPicture,
  StyledCardCategory,
  StyledCardLike,
  StyledCardContent,
  StyledCardTitle,
  StyledCardPrice,
  StyledCardCreatorRow,
  StyledCardAvatar,
  StyledCardCreatorName,
  StyledFavoritedIcon,
} from "./Card.styled";

import ethereumIcon from "assets/logos_ethereum.svg";
import { StyledMPFLex } from "components/components.styled";
import NFTCharacter1 from "assets/NFT-character-1.png";
import NFTCharacter2 from "assets/NFT-character-2.png";
import NFTCharacter3 from "assets/NFT-character-3.png";
import NFTCharacter4 from "assets/NFT-character-4.png";
import NFTCharacter5 from "assets/NFT-character-5.png";

export interface CardProps {
  imageId: number;
  title: string;
  category: string;
  price: string;
  creator: string;
  creatorAvatar: string;
  liked?: boolean;
}

const nftImages = [
  NFTCharacter1,
  NFTCharacter2,
  NFTCharacter3,
  NFTCharacter4,
  NFTCharacter5,
];

const getNFTCharacterImage = (imageId: number) => {
  const nftImageIndex = (imageId - 1) % 5;
  return nftImages[nftImageIndex];
};

const Card: React.FC<CardProps> = ({
  imageId,
  title,
  category,
  price,
  creator,
  creatorAvatar,
  liked,
}) => {
  return (
    <StyledCardWrapper>
      <StyledCardImage>
        <StyledCardPicture src={getNFTCharacterImage(imageId)} alt={title} />
        <StyledCardCategory>{category}</StyledCardCategory>
        <StyledCardLike>
          <StyledFavoritedIcon $isLiked={liked} />
        </StyledCardLike>
      </StyledCardImage>
      <StyledCardContent>
        <StyledMPFLex justify="space-between" $fullWidth>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledMPFLex>
            <img src={ethereumIcon} alt="Ethereum" width={16} height={16} />
            <StyledCardPrice>{price} ETH</StyledCardPrice>
          </StyledMPFLex>
        </StyledMPFLex>
        <StyledCardCreatorRow gap={"middle"} align="center">
          <StyledCardAvatar src={creatorAvatar} alt={creator} />
          <StyledCardCreatorName>{creator}</StyledCardCreatorName>
        </StyledCardCreatorRow>
      </StyledCardContent>
    </StyledCardWrapper>
  );
};

export default Card;
