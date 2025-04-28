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
} from "./Card.styled";

import ethereumIcon from "assets/logos_ethereum.svg";
import { StyledMPFLex } from "components/components.styled";

export interface CardProps {
  imageId: number;
  title: string;
  category: string;
  price: string;
  creator: string;
  creatorAvatar: string;
  liked?: boolean;
}

const getNFTCharacterImage = (imageId: number) => {
  const nftImageIndex = ((imageId - 1) % 5) + 1;
  return `/src/assets/NFT-character-${nftImageIndex}.png`;
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
          <span role="img" aria-label="like">
            {liked ? "❤️" : "🤍"}
          </span>
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
