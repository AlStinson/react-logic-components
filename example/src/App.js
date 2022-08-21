import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Case, Switch } from 'react-logic-components';

import NavBarComponent from './components/NavBarComponent';
import IfPage from './pages/IfPage';


const pages = {
  index: 'index',
  if: 'If.jsx',
  switch: 'Switch.jsx',
  for: 'For.jsx',
  foreach: 'ForEach.jsx',
}

const pagesArray = Object.keys(pages).map(key => pages[key]);

const App = () => {

  const [page, setPage] = useState(pages.index)

  const navBarProps = { page, setPage, pagesArray };

  console.log(page);
  return (
    <>
      <NavBarComponent {...navBarProps} />
      <Container as="main">
          <Switch value={page}>
            <Case value={pages.index}></Case>
            <Case value={pages.if}><IfPage /></Case>
            <Case value={pages.switch}></Case>
            <Case value={pages.for}></Case>
            <Case value={pages.foreach}></Case>
          </Switch>
      </Container>
    </>
  );
}

export default App
