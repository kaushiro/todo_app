import React from "react";
import { NavLink } from "react-router-dom";

import { NavListItemStyled } from "./styles";

interface IProps {
  link: string;
  exact?: boolean;
  testId?: string;
}
const NavigationItem: React.FC<IProps> = ({
  link,
  exact,
  children,
  testId,
}) => (
  <NavListItemStyled>
    <NavLink to={link} exact={exact} data-testid={`link-${testId}`}>
      {children}
    </NavLink>
  </NavListItemStyled>
);

export default NavigationItem;
