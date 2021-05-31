import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import kBlackLogo from "../../../assets/images/k_black.svg";

import { SideDrawerContainerStyled, SideDrawerLogoStyled } from "./styles";

interface IProps {
  open: boolean;
  closed:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}
const SideDrawer: React.FC<IProps> = ({ open, closed }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <SideDrawerContainerStyled isOpen={open} onClick={closed}>
        <SideDrawerLogoStyled>
          <Logo imgSrc={kBlackLogo} />
        </SideDrawerLogoStyled>
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawerContainerStyled>
    </>
  );
};

export default SideDrawer;
