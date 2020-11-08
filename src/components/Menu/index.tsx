import { useState } from 'react';
import Link from 'next/link';
import { Search as SearchIcon } from '@styled-icons/feather/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';
import { Close as CloseIcon } from '@styled-icons/evil/Close';

import Logo from 'components/Logo';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';

import * as s from './styles';

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <s.Container>
      <MediaMatch lessThan="medium">
        <s.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </s.IconWrapper>
      </MediaMatch>

      <s.LogoWrapper>
        <Logo hideTextOnMobile />
      </s.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <s.MenuFullScreenNav>
          <s.MenuFullScreenLink href="#">Home</s.MenuFullScreenLink>
          <s.MenuFullScreenLink href="#">Explore</s.MenuFullScreenLink>
        </s.MenuFullScreenNav>
      </MediaMatch>

      <s.RightGroupWrapper>
        <s.IconWrapper>
          <SearchIcon aria-label="search" />
        </s.IconWrapper>

        <s.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </s.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </s.RightGroupWrapper>

      <s.MenuFullScreen aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <s.MenuFullScreenNav>
          <s.MenuFullScreenLink href="#">home</s.MenuFullScreenLink>
          <s.MenuFullScreenLink href="#">explore</s.MenuFullScreenLink>

          {!!username && (
            <s.LoggedContentWrapper>
              <s.MenuFullScreenLink aria-label="my account" href="#">
                my account
              </s.MenuFullScreenLink>
              <s.MenuFullScreenLink aria-label="wishlist" href="#">
                wishlist
              </s.MenuFullScreenLink>
            </s.LoggedContentWrapper>
          )}
        </s.MenuFullScreenNav>

        {!username && (
          <s.RegisterBoxWrapper>
            <Link href="/sign-in" passHref>
              <Button as="a" fullWidth aria-label="login now">
                sign in
              </Button>
            </Link>
            <s.TextWrapper>or</s.TextWrapper>
            <Link href="/sign-up" passHref>
              <s.CreateAccountWrapper
                title="create account"
                aria-label="create account"
              >
                sign up
              </s.CreateAccountWrapper>
            </Link>
          </s.RegisterBoxWrapper>
        )}
      </s.MenuFullScreen>
    </s.Container>
  );
};

export default Menu;
