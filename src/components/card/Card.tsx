import React from 'react';
import {
  StyledCardWrapper,
  StyledCardImage,
  StyledCardPicture,
  StyledCardCategory,
  StyledCardLike,
  StyledCardContent,
  StyledCardTitleRow,
  StyledCardTitle,
  StyledCardPrice,
  StyledCardCreatorRow,
  StyledCardAvatar,
  StyledCardCreatorName,
} from './Card.styled';

export interface CardProps {
  image: string;
  title: string;
  category: string;
  price: string;
  creator: string;
  creatorAvatar: string;
  liked?: boolean;
}

const Card: React.FC<CardProps> = ({
  image,
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
        <StyledCardPicture src={image} alt={title} />
        <StyledCardCategory>{category}</StyledCardCategory>
        <StyledCardLike>
          {/* Replace with heart icon SVG or component */}
          <span role="img" aria-label="like">
            {liked ? '❤️' : '🤍'}
          </span>
        </StyledCardLike>
      </StyledCardImage>
      <StyledCardContent>
        <StyledCardTitleRow>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardPrice>{price}</StyledCardPrice>
        </StyledCardTitleRow>
        <StyledCardCreatorRow>
          <StyledCardAvatar src={creatorAvatar} alt={creator} />
          <StyledCardCreatorName>{creator}</StyledCardCreatorName>
        </StyledCardCreatorRow>
      </StyledCardContent>
    </StyledCardWrapper>
  );
};

export default Card;
