import { StyledMPFLex } from "components/components.styled";
import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 365px;
`;

export const StyledCardImage = styled.div`
  width: 100%;
  height: 235px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.cardGradient};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
`;

export const StyledCardPicture = styled.img`
  width: 100%;
  height: 100%;
  padding-top: 28px;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`;

export const StyledCardCategory = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ theme }) => theme.colors.categoryBg};
  border-radius: 4px;
  padding: 4px 12px;
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.typography.weightMedium};
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledCardLike = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledCardTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const StyledCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h5};
  font-weight: ${({ theme }) => theme.typography.weightSemiBold};
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
`;

export const StyledCardPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.typography.weightMedium};
  color: ${({ theme }) => theme.colors.price};
`;

export const StyledCardCreatorRow = styled(StyledMPFLex).attrs({
  $fullWidth: true,
})`
  margin-top: 12px;
`;

export const StyledCardAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.background};
`;

export const StyledCardCreatorName = styled.span`
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.typography.weightMedium};
  color: ${({ theme }) => theme.colors.textLight};
`;
