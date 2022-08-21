import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ForEach } from 'react-logic-components'

import NavLinkPageComponent from './NavLinkPageComponent';

const NavBarComponent = props => {
  return (
    <NavBar bg="dark" variant="dark" sticky="top" onSelect={props.setPage} >
      <Container>
        <NavBar.Brand>react-logic-components</NavBar.Brand>
        <NavBar.Collapse>
          <Nav variant="pills" activeKey={props.page} justify>
            <ForEach array={props.pagesArray} element={NavLinkPageComponent} />
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default NavBarComponent