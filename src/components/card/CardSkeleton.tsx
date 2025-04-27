import React from "react";
import { Skeleton } from "antd";
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
} from "./Card.styled";

const CardSkeleton: React.FC = () => {
  return (
    <StyledCardWrapper>
      <StyledCardImage>
        <StyledCardPicture
          as="div"
          style={{ background: "#f0f0f0", height: 180, width: "100%" }}
        />
        <StyledCardCategory>
          <Skeleton.Input
            style={{ width: 80, height: 20 }}
            active
            size="small"
          />
        </StyledCardCategory>
        <StyledCardLike>
          <Skeleton.Avatar
            style={{ width: 24, height: 24 }}
            shape="circle"
            active
          />
        </StyledCardLike>
      </StyledCardImage>
      <StyledCardContent>
        <StyledCardTitleRow>
          <StyledCardTitle>
            <Skeleton.Input
              style={{ width: 100, height: 24 }}
              active
              size="small"
            />
          </StyledCardTitle>
          <StyledCardPrice>
            <Skeleton.Input
              style={{ width: 60, height: 24 }}
              active
              size="small"
            />
          </StyledCardPrice>
        </StyledCardTitleRow>
        <StyledCardCreatorRow>
          <StyledCardAvatar as="div">
            <Skeleton.Avatar
              style={{ width: 32, height: 32 }}
              shape="circle"
              active
            />
          </StyledCardAvatar>
          <StyledCardCreatorName>
            <Skeleton.Input
              style={{ width: 80, height: 20 }}
              active
              size="small"
            />
          </StyledCardCreatorName>
        </StyledCardCreatorRow>
      </StyledCardContent>
    </StyledCardWrapper>
  );
};

export default CardSkeleton;
