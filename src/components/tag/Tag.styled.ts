import { Tag } from "antd";
import { styled } from "styled-components";

export const StyledTag = styled(Tag)<{ $selected: boolean }>`
  background: linear-gradient(
    91.47deg,
    rgba(218, 69, 143, ${({ $selected }) => ($selected ? 1 : 0.5)}) -6%,
    rgba(218, 52, 221, ${({ $selected }) => ($selected ? 1 : 0.5)}) 113.05%
  );
  color: #fff !important;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 0;
`;

export const StyledTagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const StyledCollapseButton = styled.button`
  background: linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 600;
  margin-left: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(187, 75, 255, 0.18);
  display: flex;
  align-items: center;
`;
