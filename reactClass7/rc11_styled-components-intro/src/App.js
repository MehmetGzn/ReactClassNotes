import Button, { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/Header.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <div>
      <Container bg="gray">
        <HeaderText color="white">Styled Components</HeaderText>
        <Button primary>Click</Button>
        <Button>Click</Button>
        <TomatoButton>Click</TomatoButton>
        <TomatoButton primary>Click</TomatoButton>
        <StyledLink href="https://clarusway.com/" target="_blank">
          Clarusway
        </StyledLink>
        <StyledLink secondary href="https://clarusway.com/" target="_blank">
          Clarusway
        </StyledLink>
      </Container>
    </div>
  );
};

export default App;
