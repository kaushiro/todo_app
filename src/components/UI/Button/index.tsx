import React from "react";

import { ButtonStyled } from "./styles";

interface IProps {
  isDisabled?: boolean;
  btnType?: string;
  onClick?: (event: { preventDefault: () => void }) => void;
  className?: string;
  text?: string;
}
const Button: React.FC<IProps> = ({
  isDisabled,
  btnType,
  onClick,
  className,
  text,
}) => (
  <ButtonStyled
    disabled={isDisabled}
    btnType={btnType}
    onClick={onClick}
    className={className}
  >
    {text}
  </ButtonStyled>
);

export default Button;
