import React from 'react';
import Link from 'next/link';
import {
  DesktopWrapper,
  DesktopNav,
  DesktopNavItem,
  DesktopContent,
} from './styled/layoutStyled';

const Layout: React.FC = ({ children }) => {
  return (
    <DesktopWrapper>
      <DesktopNav>
        <Link href="/">
          <DesktopNavItem>Home</DesktopNavItem>
        </Link>
        <Link href="/posts">
          <DesktopNavItem>Posts</DesktopNavItem>
        </Link>
        <Link href="/posts/1">
          <DesktopNavItem>Single Post</DesktopNavItem>
        </Link>
        <Link href="/categories">
          <DesktopNavItem>Categories</DesktopNavItem>
        </Link>
        <Link href="/create">
          <DesktopNavItem>Create</DesktopNavItem>
        </Link>
        <Link href="/edit/1">
          <DesktopNavItem>Edit</DesktopNavItem>
        </Link>
      </DesktopNav>
      <DesktopContent>{children}</DesktopContent>
    </DesktopWrapper>
  );
};

export default Layout;
