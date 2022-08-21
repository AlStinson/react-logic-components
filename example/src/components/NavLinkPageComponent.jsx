import Nav from 'react-bootstrap/Nav';

const NavLinkPageComponent = props => {
  return <Nav.Link eventKey={props.value}>{props.value}</Nav.Link>;
}

export default NavLinkPageComponent