import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

export const Box = styled.div`
  ${space}
  ${layout}
  ${color}
`;
export const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DesktopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #528ef6;
  height: 70px;
`;

export const DesktopNavItem = styled.div`
  width: 150px;
  font-size: 24px;
  color: white !important;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #528ef6 !important;
    background-color: white;
  }
  cursor: pointer;
`;
export const DesktopContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
