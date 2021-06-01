import React from "react";

import { ButtonStyled } from "./styles";

interface IProps {
  isDisabled?: boolean;
  btnType?: string;
  onClick?: (event: { preventDefault: () => void }) => void;
  className?: string;
  text?: string;
  testId?: string;
}
const Button: React.FC<IProps> = ({
  isDisabled,
  btnType,
  onClick,
  className,
  text,
  testId,
}) => (
  <ButtonStyled
    disabled={isDisabled}
    btnType={btnType}
    onClick={onClick}
    className={className}
    data-testid={`button-${testId}`}
  >
    {text}
  </ButtonStyled>
);

export default Button;
