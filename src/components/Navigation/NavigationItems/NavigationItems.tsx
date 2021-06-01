import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import { NavigationItemsStyled } from "./styles";
import messages from "./messages";

const NavigationItems: React.FC = () => (
  <NavigationItemsStyled className="NavigationItems">
    <NavigationItem link="/todos" testId="todos">
      {messages.listLink.defaultMessage}
    </NavigationItem>
  </NavigationItemsStyled>
);

export default NavigationItems;
