import React from "react";

import { StyledCheckbox } from "./styles";
import messages from "./messages";
interface IProps {
  isChecked?: boolean;
  onClick?: () => void;
  listItemId?: string;
}

const Checkbox: React.FC<IProps> = ({ isChecked, onClick, listItemId }) => (
  <>
    <label id="completion-checkbox-label">
      {messages.completedCheckBox.defaultMessage}
    </label>
    <StyledCheckbox
      data-testid={`completion-checkbox-${listItemId}`}
      type="checkbox"
      isChecked={isChecked}
      onClick={onClick}
    />
  </>
);

export default Checkbox;
