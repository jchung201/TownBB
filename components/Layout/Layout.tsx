import React from 'react';
import Link from 'next/link';
import {
  DesktopWrapper,
  Nav,
  LogoWrapper,
  Logo,
  CreateWrapper,
  Create,
  Content,
} from './layoutStyled';

const Layout: React.FC = ({ children }) => {
  return (
    <DesktopWrapper>
      <Nav>
        <Link href="/">
          <LogoWrapper>
            <Logo src="images/logo_main.png" />
          </LogoWrapper>
        </Link>
        <Link href="/create">
          <CreateWrapper>
            <Create>Create Posting</Create>
          </CreateWrapper>
        </Link>
      </Nav>
      <Content>{children}</Content>
    </DesktopWrapper>
  );
};

export default Layout;
