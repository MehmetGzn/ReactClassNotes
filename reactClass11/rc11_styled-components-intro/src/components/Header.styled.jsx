import styled from "styled-components";

const HeaderText = styled.h1`
  color: ${({ color }) => color || "orange"};
  font-size: 2rem;
  margin: 1rem 0;
  font-family: "tahoma";
  text-align: center;
`;

export default HeaderText;
