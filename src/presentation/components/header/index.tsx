import { Container, Image } from "./styles";
const logo = require("../../assets/logo.png");
function Header() {
  return (
    <Container>
      <Image src={logo} alt="Logo" />
    </Container>
  );
}

export default Header;
