import styled from "styled-components";

export const OrderedListStyled = styled.ol`
  display: flex;
  flex-direction: column;
  counter-reset: section;
  width:95%;
  padding: 0 2rem;
  list-style-position: inside;
  li:before {
    counter-increment: section;
    content: counter(section) ".";
    margin: 0 0.5rem; 
  }

  li {
    display: flex;
    align-items: center;
    border: 1px solid grey;
    &:not(:first-child) {
      border-top: none;
    }
}
  }
  li button {
    display: flex;
    justify-content: flex-end;
  }

`;
