import React from "react";

import { StyledCheckbox } from './styles';

interface IProps {
  isChecked?: boolean;
  onClick?: () => void;
}

const Checkbox: React.FC<IProps> = ({isChecked, onClick}) => (
    <StyledCheckbox type="checkbox" isChecked={isChecked}  onClick={onClick}/>
);

export default Checkbox;
