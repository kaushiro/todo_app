import React, { useState } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer";

import { MainContentContainerStyled } from "./styles";

const Layout: React.FC = ({ children }) => {
  const [isDrawerOpen, showSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    showSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    showSideDrawer(!isDrawerOpen);
  };
  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={isDrawerOpen} closed={sideDrawerClosedHandler} />
      <MainContentContainerStyled>{children}</MainContentContainerStyled>
      <Footer />
    </>
  );
};

export default Layout;
