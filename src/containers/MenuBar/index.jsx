import React from "react";
import styled from "styled-components";
import { theme } from "../../utils";

import DocTitle from "./DocTitle";
import MenuButton from "./MenuButton";
import OnlineUsers from "./OnlineUsers";

const SMenuBar = styled.div`
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 100vw;
  background-color: ${theme.gray0};
  color: ${theme.gray3};
  line-height: 50px;

  display: flex;
  justify-content: space-between;
  > {
  }
`;

const MenuBar = props => {
  return (
    <SMenuBar>
      <MenuButton />
      <DocTitle />
      <OnlineUsers name={props.name} />
    </SMenuBar>
  );
};

export { MenuBar };
