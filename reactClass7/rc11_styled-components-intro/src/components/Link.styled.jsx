import styled, { css } from "styled-components";

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: yellowgreen;
      padding: 0.4rem;
      border-radius: 0.3rem;
    `}
`;

export default StyledLink;
