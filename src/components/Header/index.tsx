import logo from '../../assets/logo.png';
import { Container } from './styles';

const Header = (): JSX.Element => {
  return (
    <Container>
      <img src={logo} alt="caritas logo" />
    </Container>
  )
}

export default Header;