import { Container, Logo, Link } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Link href="/" target="_blank">
        <Logo src="/images/JornadaDoMilheiro.png" />
      </Link>
    </Container>
  );
};

export default Header;
