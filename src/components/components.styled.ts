import Divider from "antd/es/divider";
import Flex from "antd/es/flex";
import { styled } from "styled-components";

export const StyledMPText = styled.span`
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  letter-spacing: 2.2px;
`;

export const StyledMPDivider = styled(Divider)`
  background-color: #3a3841;
  margin: 48px 0;
`;

export const StyledMPFLex = styled(Flex)<{ $fullWidth?: boolean }>`
  width: ${({ $fullWidth }) => $fullWidth && "100%"};
`;

export const GradientButton = styled.button<{
  disabled?: boolean;
}>`
  padding: 12px 32px;
  border-radius: 8px;
  background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%);
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
  &:hover {
    opacity: 0.85;
  }
`;
