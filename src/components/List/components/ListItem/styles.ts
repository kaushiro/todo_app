import styled from "styled-components";

interface IListItemProps {
  isChecked?: boolean
}
export const ListItemStyled = styled.li`
  li button {
    display: flex;
    justify-content: flex-end;
  }
`;
export const ListDescriptionStyled = styled.p<IListItemProps>`
text-decoration: ${props => props.isChecked ? 'line-through' : null};
`;
