import styled from "styled-components";

interface ICheckedProps {
  isChecked?: boolean;
}

export const StyledCheckbox = styled.input<ICheckedProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.isChecked ? 'salmon' : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;
`