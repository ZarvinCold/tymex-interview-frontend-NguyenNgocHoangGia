import { styled } from 'styled-components';

export const StyledOverviewPageWrapper = styled.div<{
  background: string;
  bottomBackground: string;
}>`
  background: url(${(props) => props.background}) center/cover no-repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 4%;
  gap: 100px;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.bottomBackground}) center/contain
      no-repeat;
    background-position: bottom;
    z-index: -1;
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
