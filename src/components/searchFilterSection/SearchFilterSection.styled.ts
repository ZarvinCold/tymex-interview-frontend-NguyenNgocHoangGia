import styled from "styled-components";
import { Button, Slider, Input, Select, SelectProps } from "antd";

export const GradientButton = styled(Button)`
  background: linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%);
  color: #fff;
  border: none;
  box-shadow: 0px 0px 50px rgba(187, 75, 255, 0.32);
  border-radius: 4px;
  height: 40px;
  font-weight: 600;
`;

export const GradientSlider = styled(Slider)`
  .ant-slider-track {
    background: linear-gradient(90deg, #da458f 0%, #da34dd 100%);
    height: 8px;
  }
  .ant-slider-handle {
    border-color: #da34dd;
    inset-block-start: 3px;
  }
  .ant-slider-rail {
    background-color: rgba(58, 56, 65, 1);
    height: 8px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: transparent;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 380px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: rgba(137, 136, 139, 1);
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  justify-content: space-between;
`;

export const TransparentInput = styled(Input)`
  background: transparent;
  border: 1px solid rgba(137, 136, 139, 1);
  padding: 8px 12px;
  input {
    background: transparent;
    color: #fff;
    &::placeholder {
      color: rgba(137, 136, 139, 1);
      opacity: 1;
    }
    border: none;
    box-shadow: none;
  }
`;

export const TransparentSelect = styled(Select)<SelectProps>`
  background: transparent;
  &&& {
    .ant-select-selector {
      background: transparent;
      border: 1px solid rgba(58, 56, 65, 1);
      color: #fff;
      .ant-select-selection-item {
        color: #fff;
      }
      .ant-select-selection-placeholder {
        color: rgba(137, 136, 139, 1);
      }
    }
  }
`;
