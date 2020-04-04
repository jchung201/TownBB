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
export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 2.5rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 15rem;
`;

export const CreateWrapper = styled.div`
  margin-top: 6rem;
  margin-right: 10rem;
  cursor: pointer;
`;
export const Create = styled.div`
  background-color: #49a59d;
  color: white;
  width: 28rem;
  height: 7rem;
  font-size: 3.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease 0s;
  &:hover {
    background: #2a615d;
    letter-spacing: 0.1rem;
    -webkit-box-shadow: 0rem 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0rem 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    box-shadow: 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
