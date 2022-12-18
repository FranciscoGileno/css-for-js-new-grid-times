import React from "react";
import { Menu, Search, User } from "react-feather";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";
import Button from "../Button/Button";

import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionItems />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActions>
          <ActionItems />
        </DesktopActions>
        <Logo />
        <DesktopSubscribe />
      </MainHeader>
    </header>
  );
};

function ActionItems() {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  );
}

function DesktopSubscribe() {
  return (
    <SubscribeWrapper>
      <Button>Subscribe</Button>
      <SubscriberLink href="">Already a subscriber?</SubscriberLink>
    </SubscribeWrapper>
  );
}

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 64px;

  @media ${QUERIES.tabletOnly} {
    margin-top: 44px;
    margin-bottom: 66px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 12px;
    margin-bottom: 76px;
  }
`;

const DesktopActions = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
`;

const SubscriberLink = styled.a`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[900]};
  font-style: italic;
  text-decoration: revert;
`;

export default Header;
