import { Button } from '../Button';

import { NavMenuItem, Nav, NavContainer, NavMenu, NavTitle } from './styles';

import coffe from '../../assets/images/coffe.svg';

export default function NavBar() {
  return (
    <Nav>
      <NavContainer>
        <NavTitle>
          <h1>Rolézinho</h1>
          <h4>.blog</h4>
        </NavTitle>

        <NavMenu>
          <NavMenuItem>
            <Button>
              <img src={coffe} alt="Coffe" />
              Me pague um café
            </Button>
          </NavMenuItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}
