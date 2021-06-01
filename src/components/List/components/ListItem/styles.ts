import styled from "styled-components";

interface IListItemProps {
  isChecked?: boolean;
}
export const ListItemStyled = styled.li``;
export const ListDescriptionStyled = styled.div<IListItemProps>`
  text-decoration: ${(props) => (props.isChecked ? "line-through" : null)};
  display: flex;
  width: 60vw;
`;

export const ListItemButtonsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
`;
