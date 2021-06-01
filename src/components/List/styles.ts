import styled from "styled-components";

export const OrderedListStyled = styled.ol`
  display: flex;
  flex-direction: column;
  counter-reset: section;
  width: 95%;
  padding: 0 2rem;
  list-style-position: inside;
  li:before {
    counter-increment: section;
    content: counter(section) ".";
    margin: 1rem;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #ccc;
    &:not(:first-child) {
      border-top: none;
    }
  }
`;
